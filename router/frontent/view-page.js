const { application } = require('express');
let express = require('express');
let pagemodel = require('../../model/page-model')
let pageRouter = express();


pagemodel.find({})
    .then((x) => {
        pageRouter.set('pages', x) 
        //pageRouter.locals.ihave = "spoken";
    })
    .catch((y) => {
        console.log(y)
    })

pageRouter.get('/', (req, res) => {
    pagemodel.find({})
    .then((pages) => {
        res.render('./frontent/index', { pages })
    })
    .catch((y) => {
        // console.log(y)
    })
})


pageRouter.get('/d/:id', (req, res) => {
    let query = req.params.id;
    pagemodel.findOne({ PageUrl: query })
    .then((b) => {
        if(!b){
            res.redirect('/')
        }
        else{
            res.render('./frontent/view-page-file', { pages: pageRouter.get('pages'), b })
        }
        
    })
    .catch((y) => {
       
    })
})


module.exports = pageRouter