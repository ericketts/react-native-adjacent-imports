const path = require('path');

module.exports = {
  getProjectRoots() {
    return [
      // root of the (rn) project
      __dirname,

      // the parent of the root of the project, getting access
      // to `shared` and `web`
      path.join(__dirname, ".."),

      // finally the root proj node_modules for access to
      // shared dependencies
      path.join(__dirname, "..", "..", "node_modules"),
    ];
  }
};

