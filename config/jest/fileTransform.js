const path = require("path");

// This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/en/webpack.html
var flowRemoveTypes = require("flow-remove-types");

module.exports = {
  process(src, filename) {
    console.log("transforming");
    return flowRemoveTypes(src).toString();
    // return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  }
};
