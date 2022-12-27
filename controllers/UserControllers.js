const USER = require('../models/utilisateur/UserModel');

async function ajouterUser(req,res){
    const user = new USER({
        nom : req.body.nom,
        email : req.body.email,
        mdp : req.body.mdp,
        role : req.body.role,
    })
    user.save((err)=>{
        if(err)console.error(err);
        res.redirect('/');
    })
}

async function modifierUser(req,res){
    USER.findByIdAndUpdate(req.params.id,{
        nom : req.body.nom,
        email : req.body.email,
        mdp : req.body.mdp,
        role : req.body.role,
    })
    .then(result => res.redirect('/'))
    .catch((err)=>console.error(err));
}

async function suppimerUser(req,res){
    USER.findByIdAndDelete(req.params.id)
    .then(result => res.redirect("/"))
    .catch((err)=>console.error(err));
}

module.exports = {ajouterUser , modifierUser , suppimerUser};