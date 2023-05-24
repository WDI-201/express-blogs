const express = require("express");
const { v4: uuid } = require("uuid"); // grab v4 from the uuid then rename to uuid
// uuid()
// const uuid = require("uuid");
// uuid.v4()

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
//http://localhost:3000/blogs
router.get("/", (req, res) => {
	res.json({ message: "hello from blog route" });
});

//get route that gets all the blogs
//http://localhost:3000/blogs/all-blogs
router.get("/all-blogs", (req, res) => {
	res.json({ success: true, data: blogs });
});

//delete route that deletes one by id using req.params
//http://localhost:3000/blogs/delete-blogs/blogs5
router.delete("/delete-blog/:id", (req, res) => {
	const delID = req.params.id;
	const findIndex = blogs.findIndex((blog) => blog.id.toString() === delID);
	if (findIndex === -1) {
		return res.status(400).json({ success: false, message: "blog not found" });
	}
	blogs.splice(findIndex, 1);

	res.status(200).json({ success: true, data: "id deleted" });
});

//get one blog route by id
//http://localhost:3000/blogs/get-one/blogs3

//get some blogs route by author
//http://localhost:3000/blogs/get-some/Michael%20Johnson

//post one blog route
//http://localhost:3000/blogs/new-blog
router.post("/new-blog", (req, res) => {
	const errArray = [];
	// const newID = `blog${blogs.length + 1}`;
	const newBlog = {
		id: uuid(),
		title: req.body.title,
		description: req.body.description,
		author: req.body.author,
		createdAt: new Date().toISOString(), // class called Date object and create a time then it calls the method .toISOString() which converts this time to ISOString
		lastModified: new Date().toISOString(),
	};
	for (let key in newBlog) {
		if (newBlog[key] === "" || newBlog[key] === undefined) {
			errArray.push(`${key} cannot be empty`);
		}
	}
	if (errArray.length > 0) {
		return res.status(400).json({ success: false, message: errArray });
	}
	blogs.push(newBlog);
	res.status(200).json({ success: true, data: newBlog });
});

//update (put) one blog by id route
//http://localhost:3000/update-one/blog1
router.put("/update-blog/:updateId", (req, res) => {
	const { title, description, author } = req.body;
	const findIndex = blogs.findIndex((blog) => blog.id === req.params.updateId);

	if (findIndex === -1) {
		return res.status(400).json({ success: false, message: "blog not found" });
	} else {
		const blog = blogs[findIndex];

		// if (title) {
		// 	updateBlog.title = title;
		// }
		blog.title = title ? title : blog.title;
		blog.description = description ? description : blog.description;
		blog.author = author ? author : blog.author;

		res.status(200).json({ success: true });
	}
});

module.exports = router;
