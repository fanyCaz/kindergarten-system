const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportLocal = require('passport-local')

router.use(express.urlencoded({extended:true}));

/*router.use(passport.initialize);*/

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use(new passportLocal(function(username,password,done){
    // Cambiar esta parte para verificar con la base de datos 
    if(username == "admin" && password == "12345")
        return done(null,true);
    done(null,false);
}));

router.post('/auth', passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/admin/login",
    failureMessage: true
  }));


module.exports = router;