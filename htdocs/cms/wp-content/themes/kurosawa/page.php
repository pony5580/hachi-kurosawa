<?php
/**
 * @package WordPress
 * @subpackage kurosawa
 * @since kurosawa 1.0
 */

get_header(); ?>
<!-- header.php -->
  <div id="contents">
    <div class="inner">
      <?php while ( have_posts() ) : the_post(); ?>

		<?php get_template_part( 'content', 'page' ); ?>

	<?php endwhile; // end of the loop. ?>
    </div>
  </div>
<!-- footer.php -->
<?php get_footer(); ?>