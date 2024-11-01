<?php

add_action( 'init', 'wptcp_init_enc' );
function wptcp_init_enc() {
    add_filter( "mce_external_plugins", "wptcp_enc_filter" );
    add_filter( 'mce_buttons', 'wptcp_reg_enc_filter' );
}
function wptcp_enc_filter( $enc_array ) {
    $enc_array['wptcp_enc'] = plugins_url( 'enc-filter.js', __FILE__ );
    return $enc_array;
}
function wptcp_reg_enc_filter( $enc_button ) {
    array_push( $enc_button, 'encout' );
    return $enc_button;
}
?>