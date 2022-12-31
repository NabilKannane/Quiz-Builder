const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    nom : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
        unique : true,
    },
    mdp : {
        type : String,
        required: true,
    },
    role: {
        type : String,
        required :true,
    }
})

module.exports = mongoose.model('utilisateurs',UserSchema);
