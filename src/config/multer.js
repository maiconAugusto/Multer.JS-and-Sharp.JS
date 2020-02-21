const multer = require('multer')
const { extname } = require('path')

module.exports = {
    
    storage: multer.diskStorage({
        destination: 'upload/avatar/',
        filename: (req, file, cb)=>{
                cb(null,req.params.id + extname(file.originalname))
        }
    })
}
