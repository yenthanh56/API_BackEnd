const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GOOGLE_CLIENT_ID =
	"32964233389-a11hv3fkuorp6ntv4ksb79erg7vlttm5.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(
	new GoogleStrategy(
		{
			clientID: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
		},
		function (accessToken, refreshToken, profile, done) {
			return done(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	return done(null, user);
});
passport.deserializeUser((user, done) => {
	return done(null, user);
});
