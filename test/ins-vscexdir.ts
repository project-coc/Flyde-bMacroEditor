import { loadFlow } from "@flyde/runtime";

async function main() {
    const execute = await loadFlow("./test/node-inst-vscdir.flyde");
    execute();
}

main();