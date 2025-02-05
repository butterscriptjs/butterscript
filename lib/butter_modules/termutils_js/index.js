const readline = require('readline');
// written by chatgpt :/
module.exports = {
    write: function (msg) {
        process.stdout.write(msg); 
    },
    read: async function () {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(">> ", (input) => {
                rl.close();
                return resolve(input);
            });

            rl.on("close", () => {
                process.stdin.destroy(); // Ensure process ends correctly
            });
        });
    }
};
