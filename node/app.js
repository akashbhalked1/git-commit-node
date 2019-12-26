const app = require('express')();
const bodyParser = require("body-parser");
const gitHubRepo = require('./apis/github-repo');
const makeLocalDirectory = require('./apis/local-directory');
const createLocalRepo = require('./apis/local-repo');
const copyDirectory = require('./apis/copy-directory');
const gitAddFiles = require('./apis/git-add');
const gitCommit = require('./apis/git-commit');
const gitPush = require('./apis/git-push');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/v1/one-click-api/create-github-repo', gitHubRepo.gitHubRepo)
app.post('/v1/one-click-api/make-local-directory', makeLocalDirectory.makeLocalDirectory)
app.put('/v1/one-click-api/create-local-repo', createLocalRepo.createLocalRepo)
app.put('/v1/one-click-api/copy-directory', copyDirectory.copyDirectory)
app.post('/v1/one-click-api/git-add', gitAddFiles.gitAddFiles)
app.post('/v1/one-click-api/git-commit', gitCommit.gitCommit)
app.post('/v1/one-click-api/git-push', gitPush.gitPush)

app.listen(3000, () => console.log("running on port 3000"))