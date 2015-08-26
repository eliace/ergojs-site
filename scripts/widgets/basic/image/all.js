

$context.section('Размер по ширине');
$context.section_begin('image-width');
$context.section_end('image-width');

var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: '__gap',
//	layout: 'stack',
	defaultItem: {
		etype: 'image',
		src: 'img/galleries/space/planet_fantasy_art-wallpaper-1366x768.jpg'
	},
	items: [
//		{cls: 'huge'},
//		{cls: 'width-large'},
		{cls: 'width-medium'},
		{cls: 'width-small'},
		{cls: 'width-tiny'},
		{cls: 'width-mini'}
	]
});

w.render('#sample');


$context.section('Размер по высоте');
$context.section_begin('image-height');
$context.section_end('image-height');

var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: '__gap',
//	layout: 'stack',
	defaultItem: {
		etype: 'image',
		src: 'img/galleries/space/planet_fantasy_art-wallpaper-1366x768.jpg'
	},
	items: [
//		{cls: 'huge'},
//		{cls: 'height-large'},
		{cls: 'height-medium'},
		{cls: 'height-small'},
		{cls: 'height-tiny'},
		{cls: 'height-mini'}
	]
});

w.render('#sample');

