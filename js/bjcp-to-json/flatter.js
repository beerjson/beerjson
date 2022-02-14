//https://github.com/lodash/lodash/issues/2240
const _ = require('lodash')
const FP = require('lodash/fp')

const flattenKeys = (obj, path = []) =>
  !_.isObject(obj)
    ? { [path.join('.')]: obj }
    : _.reduce(
        obj,
        (cum, next, key) => _.merge(cum, flattenKeys(next, [...path, key])),
        {}
      )

const unflattenKeys = FP.flow([
  FP.toPairs,
  FP.reduce((cum, [key, value]) => _.set(cum, key, value), {})
])

module.exports = {
  flattenKeys,
  unflattenKeys
}
