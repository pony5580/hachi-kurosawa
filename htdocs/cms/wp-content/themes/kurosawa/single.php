<?php get_header(); ?>	
<!-- header.php -->
 <div id="contents">
    <div class="inner">
  
     <section id="blogContents">

	<?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	<article>
     <header>
        <h1><?php the_title(); ?></h1>
        <time><?php the_time('Y.m.d') ?></time>
      </header>
      <div class="blogContent">
        <?php the_content(); ?>
      </div>
      <footer>
        <span>Hiroyuki KUROSAWA</span>
      </footer>
    </article>
	<?php endwhile; ?>
	<?php else : ?>
	    <h2 class="title">記事が見つかりませんでした。</h2>
	<?php endif; ?>
	 </section>
     <!-- [ blogContent ] -->
     <?php get_sidebar(); ?>
     <!-- sidebar.php -->	

    </div>
  </div>
<!-- footer.php -->	
<?php get_footer(); ?>