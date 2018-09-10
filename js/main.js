addEventListener("load", function() {
	loadBlogposts();
});

function loadBlogposts()
{
	var xhr = new XMLHttpRequest();
	xhr.onload = updateBlogposts;
	xhr.open("GET", "db/blogposts.json", true);
	xhr.send();
}

function updateBlogposts(ev)
{
	var blogposts = JSON.parse(ev.target.response);
	for(var i = 0; i < blogposts.length; i++)
	{
		var str = "<article id=\"article-" + blogposts[i].id + "-" + blogposts[i].name + "\">";
		str += "\n";
		str += "<h1>" + blogposts[i].header + "</h1>";
		console.log(str);
	}
}
