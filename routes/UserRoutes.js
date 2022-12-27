const express = require('express');
const {ajouterUser, modifierUser , suppimerUser} = require('../controllers/UserControllers');

const router = express.Router();

// router.get("/",(req,res)=> getQuizs(req,res));



router.post("/user", ajouterUser); 

router.put("/user/:id", modifierUser);

router.delete("/user/:id" ,suppimerUser)

module.exports = router;