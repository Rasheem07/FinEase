import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy} from 'passport-google-oauth20';

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/Oauth2/google/callback",
      },
      function(accessToken, refreshToken, profile, done){
        return done(null , profile)
      }
    )
  );
  passport.serializeUser(function(user, done){
    done(null, user)
  })
  
  passport.deserializeUser(function(user, done){
    done(null, user)
  })

// Initialize session middleware
const sessionMiddleware = session({
  secret: 'cats',
  resave: false,
  saveUninitialized: false,
  // Add other necessary options here
});

// Initialize Passport.js
// Note: This initialization step should ideally be done during the application startup process.
// For example, in your Next.js app, you can do it in a separate file like _app.tsx or with a custom server.
// Here, we'll just include it for demonstration purposes.
// You might not need this if you've already done it elsewhere in your app.
passport.initialize();

// Export the API route handler
export async function GET(req, res) {
  try {
    // Apply Express session middleware
    await new Promise((resolve, reject) => {
      sessionMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    // Apply Passport.js session middleware
    await new Promise((resolve, reject) => {
      passport.session()(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });

    // Perform authentication with Google
    passport.authenticate('google', { scope: ['email', 'profile'] })(req, res);
  } catch (error) {
    console.error('Error in API handler:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
