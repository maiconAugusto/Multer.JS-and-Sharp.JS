const express = require('express')
const app = express()
const multer = require('multer')
const multerConfig = require('./config/multer')
const sharpConfig = require('./config/sharp')
const avatarController = require('../src/app/controllers/avatarController')

app.use(express.urlencoded({extended: true}))

const upload = multer(multerConfig)


//pass by parameter the id, which is a reference to the file name
app.post('/post/:id',upload.single('file'),sharpConfig.store,avatarController.store)

app.listen(8000,()=>{
    console.log('running')
})