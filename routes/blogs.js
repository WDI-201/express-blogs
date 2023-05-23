const express = require("express");
const router = express.Router();

const blogs = [
	{
		id: 1,
		title: "First Blog",
		description: "Description of the first blog",
		author: "John Doe",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: 2,
		title: "Second Blog",
		description: "Description of the second blog",
		author: "Jane Smith",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: 3,
		title: "Third Blog",
		description: "Description of the third blog",
		author: "Alex Johnson",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: 4,
		title: "Fourth Blog",
		description: "Description of the fourth blog",
		author: "Emily Davis",
		createdAt: "2023-05-22T19:16:00.821Z",
		lastModified: "2023-05-22T19:16:00.821Z",
	},
	{
		id: 5,
		title: "Fifth Blog",
		description: "Description of the fifth blog",
		author: "Michael Brown",
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
	const findIndex = blogs.findIndex((label) => label.id.toString() === delID);
	if (findIndex === -1) {
		return res.status(400).json({ success: false, message: "blog not found" });
	}
	blogs.splice(findIndex, 1);

	res.status(200).json({ success: true, data: "id deleted" });
});

module.exports = router;
