
const {
    Schema ,
    model
} = require('mongoose');

const myschema = new Schema({
    word:{
        type :String,
        required : true,
        maxlength : 50
    },
    message:{
        type : String,
        require : true,
        maxlength : 1000
    },
    /*createdAt:{
        type : Date,
        default : Date.now,
    },*/
});

const taskmodel = model('wordsearch_1.0' , myschema);

module.exports = taskmodel;