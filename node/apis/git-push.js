/*
Request Body
   {
       "directory" : "D:/path",
       "remote"    : "origin",
       "username"  : "author",
       "password"  : "password"
       "ref"       : "master || release",
       "remoteRef" : "remoteRef",
       "gitUrl"    : "github url",
   }
*/
const git = require('isomorphic-git')
const fs = require('fs')
git.plugins.set('fs', fs)
exports.gitPush = function(req, res) {
    try {
        let directory = req.body.directory;
        let remote = req.body.remote;
        let username = req.body.username;
        let password = req.body.password;
        let ref = req.body.ref;
        let remoteRef = req.body.remoteRef;
        let gitUrl = req.body.gitUrl;
        git.push({
            dir: directory,
            remote: remote,
            ref: ref,
            remoteRef: remoteRef,
            url: gitUrl,
            force: true,
            username: username,
            password: password
        })
        res.json({
            "respCode": "git push successful"
        })
    } catch (error) {
        res.json({
            "errorResponse": error
        })
    }
}