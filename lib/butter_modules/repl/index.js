const termutils = require('../termutils_js/index')
module.exports = {
    init: async function () {
    termutils.write("ButterScript v0.1.2\n");
    termutils.write("ButterScript is licensed with the GPL-2.0 license.\n");
    termutils.write(">> ");
    var replinput = await termutils.read()
    termutils.write("[ERROR] Option not supported: " + replinput + "\n")
    }
};
