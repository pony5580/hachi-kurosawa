<aside>
<section class="profile">
  <h1>PROFILE</h1>
  <ul>
    <li><a href="/about/">KUROSAWA</a></li>
  </ul>
</section>
<section class="archives">
  <h1>Archives</h1>
  <ul>
    <?php wp_get_archives('type=monthly&post_type=news&limit=12&show_post_count=1&format=custom&before=<li><span></span>&after=</li>'); ?>
  </ul>
</section>
<section class="categories">
  <h1>Categories</h1>
  <ul>
  <?php
	wp_list_categories(
		array('title_li' => '', 'show_count' => 1, 'post_type' => 'news', 'taxonomy' => 'newstype')
	);
	?>
  </ul>
</section>
</aside>