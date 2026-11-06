/**
 * Timing rules every document under tests/ must satisfy. A document can be
 * schema-valid and still describe something impossible, such as an addition
 * made 30 minutes before the end of a 10 minute step. These rules follow from
 * the TimingType descriptions, and JSON Schema cannot express any of them.
 */
const fs = require('fs')
const path = require('path')

const MINUTES = { sec: 1 / 60, min: 1, hr: 60, day: 1440, week: 10080 }
const minutes = t => t.value * MINUTES[t.unit]

// Which list of steps a `timing.step` indexes, by `use`. Steps are 1-based.
const STEPS = {
  add_to_mash: r => r.mash && r.mash.mash_steps,
  add_to_boil: r => r.boil && r.boil.boil_steps,
  add_to_fermentation: r => r.fermentation && r.fermentation.fermentation_steps,
  add_to_package: r => r.packaging && r.packaging.packaging_vessels
}

const ADDITIONS = [
  'fermentable_additions',
  'hop_additions',
  'miscellaneous_additions',
  'culture_additions'
]

const additions = []
for (const dir of fs.readdirSync(__dirname)) {
  const full = path.join(__dirname, dir)
  if (dir === 'xml' || !fs.statSync(full).isDirectory()) continue
  for (const file of fs.readdirSync(full)) {
    const doc = JSON.parse(fs.readFileSync(path.join(full, file), 'utf8'))
    for (const recipe of doc.beerjson.recipes || []) {
      for (const kind of ADDITIONS) {
        for (const addition of (recipe.ingredients || {})[kind] || []) {
          if (!addition.timing) continue
          additions.push({
            id: `${dir}/${file} ${kind} "${addition.name}"`,
            timing: addition.timing,
            recipe
          })
        }
      }
    }
  }
}

test('the corpus has timed additions to check', () => {
  expect(additions.length).toBeGreaterThan(50)
})

test('time and duration are never negative', () => {
  const bad = additions.filter(
    ({ timing: t }) =>
      (t.time && minutes(t.time) < 0) || (t.duration && minutes(t.duration) < 0)
  )
  expect(bad.map(a => a.id)).toEqual([])
})

test('a step refers to a step that exists', () => {
  const bad = additions
    .filter(({ timing: t }) => t.step !== undefined)
    .filter(({ timing: t, recipe }) => {
      const steps = STEPS[t.use] && STEPS[t.use](recipe)
      return !steps || !Number.isInteger(t.step) || !steps[t.step - 1]
    })
  expect(bad.map(a => `${a.id} step ${a.timing.step}`)).toEqual([])
})

// `time` places an addition within its step: back from the end for a boil
// addition, forward from the start otherwise. Either way it cannot exceed the
// step's length.
test('time does not exceed the length of the step it is in', () => {
  const bad = additions.filter(({ timing: t, recipe }) => {
    if (t.step === undefined || !t.time) return false
    const steps = STEPS[t.use] && STEPS[t.use](recipe)
    const step = steps && steps[t.step - 1]
    return step && step.step_time && minutes(t.time) > minutes(step.step_time)
  })
  expect(
    bad.map(
      a => `${a.id} time ${minutes(a.timing.time)} min > step ${a.timing.step}`
    )
  ).toEqual([])
})

test('a boil addition without a step is within the boil time', () => {
  const bad = additions.filter(({ timing: t, recipe }) => {
    if (t.use !== 'add_to_boil' || t.step !== undefined || !t.time) return false
    const boilTime = recipe.boil && recipe.boil.boil_time
    return boilTime && minutes(t.time) > minutes(boilTime)
  })
  expect(bad.map(a => `${a.id} time ${minutes(a.timing.time)} min`)).toEqual([])
})
