const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    image_url:{
        type:String,
    },
    posts:[{
        postId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        },
    }],
    followers:[{
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    }],
    following:[{
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    }],
});

//Export the model
module.exports = mongoose.model('User', userSchema);