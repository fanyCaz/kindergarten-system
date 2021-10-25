const express = require('express');
const router = express.Router();
const passport = require('passport');
const sequelize = require('sequelize');
const User = require('../models').Usuario;
const passportLocal = require('passport-local')

router.use(express.urlencoded({extended:true}));


/*router.use(passport.initialize);*/

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use(new passportLocal(async function(username,password,done){
    const user = await User.findOne({where:{email:username}})
    .then(function(user){
      console.log(user)
      if(user == null){
        return done(null,false);
      }
      else if(password == user.password)
      {
        return done(null,true);
      }
      done(null,false);
    })
    .catch(function(err){
      console.log(err)
    })


    
}));

router.post('/auth', passport.authenticate("local",{
    successRedirect:"/admin/schedule",
    failureRedirect:"/admin/login"
  }));


module.exports = router;