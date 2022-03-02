var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var userSchema=new Schema({
    name:String,
    emial:{type:String,lowercase:true},
    age:{type:Number,default:0},
    password:{type:String,minlength:5},
    createAt:{type:Date,default:Date.now()},
    favourites:[String],
},{timestamps:true})


module.exports=mongoose.model('User',userSchema);