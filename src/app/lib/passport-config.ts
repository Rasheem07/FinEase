
const passport = require('passport');

export async function OauthGoogle(req: Request) {
  const GoogleStrategy = require("passport-google-oauth20").Strategy;

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/Oauth2/google/callback",
      },
      function(accessToken: any, refreshToken: any, profile: any, done: any){
        return done(null , profile)
      }
    )
  );
  passport.serializeUser(function(user: any, done: any){
    done(null, user)
  })
  
  passport.deserializeUser(function(user: any, done: any){
    done(null, user)
  })
  return Response.json({success: "true"}, {status: 201})
}
