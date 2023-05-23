var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	//res.render("/home.html"); //in app.js line app.use(express.static(path.join(__dirname, "public")));
	res.json({ message: "hello" });
});

router.get("/hello", (req, res) => {
	res.json({ message: "world" });
});

module.exports = router;
