

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
	var postContainer = document.getElementsByTagName("main")[0];
	blogposts = blogposts.sort(function(a, b) { return b.id - a.id; }); // highest ID first, no matter where placed in DB
	for(var i = 0; i < blogposts.length; i++)
	{
		var str = "<article id=\"article-" + blogposts[i].id + "-" + blogposts[i].name + "\">";
		str += "\n";
		str += "<time datetime='" + blogposts[i].date + "'>" + blogposts[i].date + "</time>";
		str += "\n";
		str += "<h1>" + blogposts[i].header + "</h1>";
		str += "<h2>" + blogposts[i].subheader + "</h2>";
		str += blogposts[i].content;
		str += "</article>";
		postContainer.innerHTML += str;
	}
}
