var passport = require('passport');
var LocalStartegy = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new LocalStartegy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());