<?php get_header(); ?>

	<div id="contents">
    <div class="inner">
  
      <section id="blogContents">
      	<?php if (have_posts()) : ?>
      	<?php while (have_posts()) : the_post(); ?>
      	<article>
          <header>
            <h1><a href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
            <time><?php the_time('Y.m.d') ?></time>
          </header>
          <div class="blogContent">
            <?php the_content('続きを読む'); ?>
          </div>
          <footer>
            <span>Hiroyuki KUROSAWA</span>
          </footer>
        </article>
      	<?php endwhile; ?>
        
        <?php if (function_exists("pagination")) {
          pagination($additional_loop->max_num_pages);
        } ?>
        
      	<!-- <nav class="blogpage">
          <a href="" class="back">&lsaquo; Back</a>
          <a class="inactive" href="">1・</a>
          <a class="inactive" href="">2・</a>
          <a class="inactive" href="">3・</a>
          <span class="current">4・</span>
          <a class="inactive" href="">5・</a>
          <a class="inactive" href="">6</a>
          <a href="http://www.example.com/blog/page/5" class="next">Next &rsaquo;</a＞
        ></nav> -->
      	<?php else : ?>
		    <h2 class="title">記事が見つかりませんでした。</h2>	   
		<?php endif; ?>
      </section>
      <!-- [ blogContent ] -->
     <?php get_sidebar('news'); ?>
     <!-- sidebar.php -->	

    </div>
  </div>

<!-- footer.php -->
<?php get_footer(); ?>
