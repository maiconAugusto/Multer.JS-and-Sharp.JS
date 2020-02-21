const sharp = require('sharp')
const { resolve } = require('path')
const fs = require('fs')

module.exports = {
   store(req, res, next){
       const { id } = req.params
       const { filename } = req.file

      sharp(req.file.path)
        .resize(400)
        .toFile(
            resolve(__dirname+'..','..','..','upload/avatar/' + id + '.jpeg')
        )
        .then((res)=>{
            return fs.unlink(resolve(__dirname +'..','..','..','upload/avatar/' + filename),()=>{
                return next()
            })
        })
        .catch(()=>{
            return res.status(400).json({error:'upload fail!'})
        })
   }
}