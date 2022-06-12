const fs = require("fs");
const path = require("path");

const functionTypes = { EVENTS: "events", COMMANDS: "commands" };

module.exports = {
    loadFunctions,
    functionTypes: functionTypes
}

async function loadFunctions(client, functionType) {
    const dir = getRecursivelyDirectoryFiles("./" + functionType, ".js");

    for(const file of dir) {
        const object = require(`./${file}`);

        console.log((!object.name ? `could not load ${file}` : `loaded ${file}`));

        if(!object.name) { continue; }

        switch(functionType) {
            case functionTypes.EVENTS:
                

                client.on(object.name, (...args) => object.execute(client, ...args));
                break;
            case functionTypes.COMMANDS:

                break;
        }
    }
}

function getRecursivelyDirectoryFiles(dir, filter = "") {
    let files = [];

    fs.readdirSync(dir)
    .forEach(file => {
        const absolutePath = path.join(dir, file);
        const isDirectory = fs.statSync(absolutePath).isDirectory();

        if(!isDirectory && !file.endsWith(filter)) { return; }

        files.push(isDirectory ? getRecursivelyDirectoryFiles(absolutePath) : absolutePath);
    })

    return files;
}