/*
Request Body
   {
       "directory" : "D:/path",
   }
*/
const git = require('isomorphic-git')
const fs = require('fs')
git.plugins.set('fs', fs)
exports.gitAddFiles = function(req, res) {
    try {
        let directory = req.body.directory;
        git.add({
            dir: directory,
            filepath: 'apiproxy'
        }).then((resolve)=>{
            console.log("resolve",resolve)
        },(reject)=>{
            console.log("reject",reject)
        })
        res.json({
            "respCode": "git add success"
        })
    } catch (error) {
        res.json({
            "errorResponse": error
        })
    }
}