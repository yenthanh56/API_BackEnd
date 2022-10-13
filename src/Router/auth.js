const router = require("express").Router();
const passport = require("passport");
const authController = require("../Controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

const CLIENT_URL = "http://localhost:3000/";
router.get("/login/success", (req, res) => {
	if (req.user) {
		res.status(200).json({
			success: true,
			message: "Successfully Loged In",
			user: req.user,
		});
	} else {
		res.status(403).json({
			error: true,
			message: "Not Authorized",
		});
	}
});

router.get("/login/failed", (req, res) => {
	res.status(401).json({
		error: true,
		message: "Login in Failure",
	});
});

router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/google/callback",
	passport.authenticate("google", {
		successRedirect: CLIENT_URL,
		failureRedirect: "/login/failed",
	})
);

module.exports = router;
