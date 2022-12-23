const mongoose = require('mongoose');

const PostScheme = mongoose.Schema({
    // title: String,
    // description: String,
    // date: Date.now,
    quote:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Posts', PostScheme);