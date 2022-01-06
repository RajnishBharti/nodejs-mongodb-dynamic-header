let mongoose = require('mongoose');
let pageSchema = mongoose.Schema({
    PageTitle :String,
    PageMeta : String,
    PageKeyword: String,
    PageHeading: String,
    PageUrl: String,
    PageUrlText: String,
    PagePhoto :String,
    pageDetails:String
})
let pagemodel = mongoose.model('pagetable', pageSchema)

module.exports = pagemodel
