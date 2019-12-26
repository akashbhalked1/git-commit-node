/*
Request Body
   {
       "destinationPath" :  "D:/path"
   }
*/
const fsExtra = require('fs-extra')
exports.makeLocalDirectory = function(req, res) {
    try {
        let destinationPath = req.body.destinationPath;
        fsExtra.mkdirs(destinationPath, function(err) {
            if (err) {
                res.json({
                    "respCode": "Error creating local directory"
                })
            } else {
                res.json({
                    "respCode": "Successfully created local directory"
                })
            }
        });
    } catch (error) {
        res.json({
            "errorResponse": error
        })
    }
}