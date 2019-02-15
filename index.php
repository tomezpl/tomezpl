<!DOCTYPE html>
<html>
    <head>
        <title>Tomasz Zając - devblog</title>
        <meta charset="utf-8">
		<link rel="stylesheet" href="css/simple-grid.css"  type="text/css">
        <link rel="stylesheet" href="css/style.css" type="text/css">
        <script src="js/main.js"></script>
    </head>
    <body>
		<div class="container-fluid">
			<header class="row">
				<div class="col-1 col-12-sm" id="logo-container">
					<img src="assets/logo.png" class="logo">
				</div>
				<div class="col-7" id="site-title-container">
					<h1>Tomasz Zając</h1>
					<h2>Programming, game development, and pretty much anything to do with computers.</h2>
				</div>
				<nav class="col-4">
					<a href="index.html">Blog</a>
					<a href="about.html">About me</a>
					<a href="showcase.html">Showcase</a>
				</nav>
			</header>
			<div class="row">

			<main class="col-12">
				<?php
				function blogpostSortCmp($a, $b)
				{
					return $b->{'id'} - $b->{'id'};
				}
			  	$blogposts = json_decode(file_get_contents("./db/blogposts.json"));
				usort($blogposts, "blogpostSortCmp");
				$mainHTML = "";
				foreach($blogposts as $bp)
				{
					$bpStr = "";
					$bpStr = "<article id='article-" . $bp->{'id'} . "-" . $bp->{'name'} . "'>\n";
					$bpStr = $bpStr . "<time datetime-'" . $bp->{'date'} . "'>" . $bp->{'date'} . "</time>\n";
					$bpStr = $bpStr . "<h1>" . $bp->{'header'} . "</h1>\n";
					$bpStr = $bpStr . "<h2>" . $bp->{'subheader'} . "</h2>\n";
					$bpStr = $bpStr . $bp->{'content'};
					$bpStr = $bpStr . "</article>\n";
					$mainHTML = $bpStr . $mainHTML;
				}
				echo($mainHTML);
				?>
			</main>
		</div>
			<footer>
				<p>Tomasz Zając &copy; 2018</p>
			</footer>
		</div>
    </body>
</html>
