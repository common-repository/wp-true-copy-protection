<?php
/*
Plugin Name:  WP True Copy Protection
Version:      1.0
Description:  Enable true copy protection for wordpress content by smart encryption.
Author:       Websecure
Author URI:   http://securebit.xyz
License:      GPLv2 or later
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  enc-plugin
*/
include("enc-filter/enc-filter.php");


function wptcp_enc_filter_css() {
wp_enqueue_style( "wptcp_enc_style", plugins_url( '/enc-filter/wptcp_enc_style.css', __FILE__ ) );
}
add_action('wp_head', 'wptcp_enc_filter_css');
?>