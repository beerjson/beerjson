var parse = require("json-schema-to-markdown");
var fs = require("fs");

var jsons = fs.readdirSync("./json");

jsons.forEach(j => {
  var schema = fs.readFile("./json/" + j, (err, data) => {
    var markdown = parse(JSON.parse(data));
    fs.writeFileSync("./md/" + j + ".md", markdown);
  });
});
