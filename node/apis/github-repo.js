/*
Request Body
   {
       "apiName" : "String API Name",
       "githubToken" : "user's guthub token",
       "useragent":"some user agent"
   }
*/
const createRepo = require('github-create-repo');
exports.gitHubRepo = function(req, res) {
    try {
        let githubToken = req.body.githubToken;
        let gitRepoName = req.body.apiName;
        let userAgent = req.body.userAgent;
        var opts = {
            'token': githubToken,
            'useragent': userAgent
        };
        createRepo(gitRepoName, opts, clbk)
        res.json({
            "respCode": "successfully created github repo"
        })
    } catch (error) {
        res.send(error)
    }
}

function clbk(error, repo, info) {
    if (info) {
        console.error(info);
    }
    if (error) {
        throw new Error(error.message);
    }
    console.log(repo);
}