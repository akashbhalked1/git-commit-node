/*
Request Body
   {
       "apiName" : "API Name",
   }
*/
const gitPromise = require('simple-git/promise');
exports.createLocalRepo = function(req, res) {
    try {
        let LocalRepoName = req.body.localRepoPath;
        const gitLocalRepo = gitPromise(LocalRepoName);
        gitLocalRepo.checkIsRepo()
            .then(isRepo => !isRepo && initialiseRepo(gitLocalRepo))
            .then(() => gitLocalRepo.fetch());
        res.json({
            "respCode": "success creating local repo"
        })
    } catch (error) {
        res.json({
            "errorResponse": error
        })
    }
}

function initialiseRepo(gitLocalRepo) {
    return gitLocalRepo.init()
}