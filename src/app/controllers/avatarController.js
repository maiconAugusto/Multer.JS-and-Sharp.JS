const sharp = require('sharp')
const { resolve } = require('path')
const fs = require('fs')


module.exports = {
    async store(req, res){
        return res.json({ok:'success'})
        
    }
}
