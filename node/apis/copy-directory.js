/*
Request Body
   {
       "sourcePath" : "source path",
       "destinationPath" : "destination path"
   }
*/
const fsExtra = require('fs-extra')
exports.copyDirectory = function(req, res) {
    try {
        let sourcePath = req.body.sourcePath;
        let destinationPath = req.body.destinationPath + "/apiproxy";
        fsExtra.copy(sourcePath, destinationPath, err => {
            if (err) {
                res.json({
                    "respCode": "error copying directory"
                })
            } else {
                res.json({
                    "respCode": "success copying directory"
                })
            }
        });
    } catch (error) {
        res.json({
            "errorResponse": error
        })
    }
}