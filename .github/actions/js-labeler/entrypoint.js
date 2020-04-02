const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const github_token = core.getInput('github_token');
    const octokit = new github.GitHub(github_token);
    const payload = github.context.payload;
    octokit.issues.addLabels({
        owner: payload.repository.owner,
        repo: payload.repository.name,
        issue_number: payload.issue.number,
        labels: "test-label",
    });
}

run();
