const argv = require("yargs")
    .option("l", {
        alias: "list",
        type: "boolean",
        description: "list table in console",
        demandOption: false,
        default: false

    })
    .option("b", {
        alias: "base",
        type: "number",
        description: "Base of table",
        demandOption: true,

    })
    .option("h", {
        alias: "hasta",
        type: "number",
        description: "limit of multiplicate",
        demandOption: false,
        default: 10
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv