let express = require('express');
let dotenv = require('dotenv')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
// router file
let pageRouter = require('./router/backend/add-page');
let viewRouter = require('./router/frontent/view-page');

let session = require('express-session');
let flash = require('connect-flash')

let app = express()
dotenv.config({path:'./config.env'})

app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect(process.env.mongoUrl, (x)=>{
    console.log('data base connected')
})
app.use(express.static(__dirname+'/public/'))
app.set('view engine', 'ejs')




// let Page = require('./model/page-model');
// Page.find({})
// .then((pages)=>{
//     app.locals.pages=pages;
// })
// .catch((y)=>{
//     console.log(y)
// })



// let Page = require('./model/page-model');
// app.use((req, res, next)=>{
//     Page.find({})
//     .then((pages)=>{
//         res.locals.pages = pages;
//     })
//     next();
// })

// Page.find({}).exec(function (err, pages) {
//     if (err) {
//         console.log(err);
//     } else {
//         app.locals.pages = pages;
//         console.log(pages)
//     }
// });


app.use(session({
    secret:'nodejs',
    resave:true,
    saveUninitialized:true
}))
app.use(flash());

app.use((req, res, next)=>{
    res.locals.sucess = req.flash('sucess');
    res.locals.err = req.flash('err');
    next()
})


app.use('/admin', pageRouter);
app.use('/', viewRouter)


app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT, " PORT Working")
})


