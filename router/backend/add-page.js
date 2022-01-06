let express = require('express');
let pagemodel = require('../../model/page-model')
let pageRouter = express();

pageRouter.get('/', (req, res)=>{
    res.render('./backend/index')
})

pageRouter.get('/add-pages', (req, res)=>{
    res.render('./backend/add-pages-file')
})


// POST METHOD
pageRouter.post('/add-pages', (req, res)=>{
    let data ={
        PageTitle :req.body.paget_Title,
        PageMetaDescription :req.body.page_meta_description,
        PageMetaKeyword:req.body.page_meta_keyword,  
        PageHeading:req.body.page_heading,      
        PageUrl:req.body.page_url,
        PageUrlText:req.body.page_url_text,        
        PagePhoto :req.body.page_photo,
        pageDetails:req.body.page_details
    }
    pagemodel.create(data)
    .then((x)=>{
        console.log(x)
        req.flash('sucess', 'Data has Created on Database')
        res.redirect('/admin')
    })
    .catch((y)=>{
        console.log(y)
    })
})



module.exports = pageRouter