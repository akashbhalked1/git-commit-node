/*
Request Body
   {
       "directory" : "D:/path",
       "name"      : "author name",
       "email"     : "author email",
       "ref"       : "master || release",
       "commitMessage" : "commit message",
   }
*/
const git = require('isomorphic-git')
const fs = require('fs')
git.plugins.set('fs', fs)
exports.gitCommit = function(req, res) {
    try {
        let directory = req.body.directory;
        let name = req.body.name;
        let email = req.body.email;
        let ref = req.body.ref;
        let message = req.body.commitMessage;
        git.commit({
            dir: directory,
            author: {
                name: name,
                email: email
            },
            ref: ref,
            message: message
        })
        res.json({
            "respCode": "git commit successful"
        })
    } catch (error) {
        res.json({
            "errorResponse": error
        })
    }
}