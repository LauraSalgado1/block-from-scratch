<?php
// This file is generated. Do not modify it manually.
return array(
	'gallery-with-hover-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/gallery-with-hover-text',
		'version' => '0.1.0',
		'title' => 'Gallery With Hover Text',
		'category' => 'media',
		'icon' => 'format-gallery',
		'description' => 'Display a gallery with hover text options.',
		'example' => array(
			
		),
		'attributes' => array(
			'boxOneHeading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.box-one .heading'
			),
			'boxOneHoverText' => array(
				'type' => 'rich-text',
				'source' => 'html',
				'selector' => '.box-one .hover'
			),
			'boxOnePhoto' => array(
				'type' => 'string',
				'source' => 'attribute',
				'attribute' => 'src'
			),
			'boxTwoHeading' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => '.box-two .heading'
			),
			'boxTwoHoverText' => array(
				'type' => 'rich-text',
				'source' => 'html',
				'selector' => '.box-two .hover'
			),
			'boxTwoPhoto' => array(
				'type' => 'string',
				'source' => 'attribute',
				'attribute' => 'src'
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide'
			)
		),
		'textdomain' => 'gallery-with-hover-text',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
