const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const github_token = core.getInput('github_token');
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log("The github_token is: ", github_token);
    console.log(`The event payload: ${payload}`);
}

run();
