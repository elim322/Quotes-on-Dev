<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

 ?>
 
			</div><!-- #content -->
 
			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="footer-info">
					<?php 
						wp_nav_menu( 
					 	array( 
						 	'theme_location' => 'primary', 
							 'menu_id' => 'primary-menu',
							 'menu_class' => 'footer-navigation'
						 	) 
						); 
					?>
					<div class="author">
					<p>Brought to you by <a href="http://www.redacademy.com/"><span class="school">RED Academy</span></a></p>	
					</div>
				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->
 
		<?php wp_footer(); ?>
 
	</body>
 </html>
