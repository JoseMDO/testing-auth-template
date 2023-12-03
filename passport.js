const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2')
const passport = require('passport')

//https://console.cloud.google.com/apis/credentials
const GOOGLE_CLIENT_ID = "72103332887-upik5p08qtg2cggbb8u1auj9s0d470tt.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

const GITHUB_CLIENT_ID = "2fb171dce9bfc15384f4"
const GITHUB_CLIENT_SECRET = "ea2d2f70cbe1ce4714d38758648a449b2f1a169c"


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done, /* done */) {
    //IF YOU WANT TO USE A DATABASE TO STORE USERS, USE THIS CODE 
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    console.log(profile)
    done(null, profile)
  }
));


passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    done(null, profile)
  }
));


passport.serializeUser((user, done) => {
    done(null, user)
})
passport.deserializeUser((user, done) => {
    done(null, user)
})