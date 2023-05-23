const express = require("express");
const router = express.Router();

const blogs = [
	{
		id: "blog1",
		title: "Introduction to JavaScript",
		description: "Learn the basics of JavaScript programming language.",
		author: "Michael Johnson",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: "blog2",
		title: "Mastering React Framework",
		description: "Become proficient in building web applications using React.",
		author: "Jane Smith",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: "blog3",
		title: "Deep Dive into Node.js",
		description:
			"Explore the advanced concepts of Node.js and server-side development.",
		author: "Michael Johnson",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: "blog4",
		title: "CSS Tricks for Web Designers",
		description: "Discover useful CSS techniques to enhance your web designs.",
		author: "Emily Davis",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: "blog5",
		title: "Effective Database Management",
		description:
			"Learn best practices for managing databases and optimizing performance.",
		author: "Robert Johnson",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
];

router.get("/", (req, res) => {
	res.json({ message: "hello from blog route" });
});
router.get("/all-blogs", (req, res) => {
	res.json({ success: true, data: blogs });
});
//get route that gets all the blogs
//delete route that deletes one by id using req.params

router.delete("/delete-blog/:id", (req, res) => {
	const delID = req.params.id;
	const findIndex = blogs.findIndex((blog) => blog.id.toString() === delID);
	if (findIndex === -1) {
		return res.status(400).json({ success: false, message: "blog not found" });
	}
	blogs.splice(findIndex, 1);

	res.status(200).json({ success: true, data: "id deleted" });
});
router.get("/by-author/:authorName", (req, res) => {
	console.log(req.params.authorName);
	res.json({ name: req.params.authorName });
});

//get one blog route by id
//get some blogs route by author
//post one blog route

module.exports = router;
