 <?php

 /*
  Plugin Name: Laura Salgado Questionnaire
  Description: Add a question with multiple answer options
  Version: 1.0
  Author: Laura Salgado
  Author URI: https://laurasalgado.com
 */

 if( ! defined('ABSPATH') ) exit;

 class LauraSalgadoQuestionnaire {
    function __construct(){
        add_action('init', array($this, 'adminAssets'));
    }

    function adminAssets(){
        wp_register_script("ournewblocktype", plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', "wp-element"));
        register_block_type("ls/laura-salgado-questionnaire", array(
            'editor_script' => 'ournewblocktype',
            'render_callback' => array($this, 'theHTML')
        ));
    }

    function theHTML($attributes){
        ob_start(); ?>
        <h1>Today the sky is <?php echo esc_html($attributes['skyColor']) ?> and the grass is <?php echo esc_html($attributes['skyColor']) ?>.</h1>
        <?php return ob_get_clean();

    }
 }

 $lauraSalgadoQuestionnaire = new LauraSalgadoQuestionnaire();