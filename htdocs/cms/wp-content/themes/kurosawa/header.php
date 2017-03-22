<!DOCTYPE HTML>
<html lang="ja" prefix="og: http://ogp.me/ns# fb: http://www.facebook.com/2008/fbml">
<head>
<meta charset="UTF-8">
<meta http-equiv="content-style-type" content="text/css">
<meta name="keywords" content="KUROSAWA" />
<meta name="description" content="" />
<meta name="copyright" content="Copyright (C) 2012 KUROSAWA CO., LTD. All Rights Reserved." />

<meta property="og:title" content="HACHI - KUROSAWA" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://hachi-kurosawa.com/" />
<meta property="og:image" content="http://hachi-kurosawa.com/shared/imgs/sns.png" />
<meta property="og:site_name" content="KUROSAWA" />
<meta property="og:description" content="KUROSAWA" />

<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<?php
$page = get_page(get_the_ID());
$slug = $page->post_name;
$pageID = '';
if (is_home()) {
	$pageID = 'pagetop';
} else if(is_page()) {
	$pageID = 'page'.$slug;
} else {
  $pageID = 'pagepost';
}

?>

<link rel="stylesheet" href="/shared/css/style.css">

<title><?php bloginfo('name'); ?> <?php if ( is_single() ) { ?> &raquo; Blog Archive <?php } ?> <?php wp_title(); ?> | KUROSAWA</title>

<?php
wp_deregister_script('jquery');
wp_enqueue_script('jquery', 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js', array(), '1');
?>
<?php wp_head(); ?>

<!--
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28414267-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
-->

</head>

<body id="<?php echo $pageID; ?>" <?php body_class(); ?>>

<div id="container">
  <header id="header">
  <h1><a href="/">KUROSAWA</a></h1>
  </header>
  
  <div id="navCol">
    <nav id="navGloval">
    <ul>
      <li id="navNews"><a href="/news/"><span class="hover"></span>NEWS</a></li>
      <li id="navWorks"><a href="/works/"><span class="hover"></span>WORKS</a></li>
      <li id="navAbout"><a href="/about/"><span class="hover"></span>ABOUT</a></li>
       <li id="navBlog"><a href="/blog/"><span class="hover"></span>BLOG</a></li>
    </ul>
    </nav>
  </div>