

$context.section('Размер по ширине');
$context.section_begin('image-width');
$context.section_end('image-width');

var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',
//	layout: 'stack',
	defaultItem: {
		etype: 'image',
		src: 'img/galleries/space/planet_fantasy_art-wallpaper-1366x768.jpg'
	},
	items: [
//		{cls: 'huge'},
//		{cls: 'width-large'},
		{as: 'width-medium'},
		{as: 'width-small'},
		{as: 'width-tiny'},
		{as: 'width-mini'}
	]
});

w.render('#sample');

$context.section('Размер по высоте');
$context.section_begin('image-height');
$context.section_end('image-height');

var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',
//	layout: 'stack',
	defaultItem: {
		etype: 'image',
		src: 'img/galleries/space/planet_fantasy_art-wallpaper-1366x768.jpg'
	},
	items: [
//		{cls: 'huge'},
//		{cls: 'height-large'},
		{as: 'height-medium'},
		{as: 'height-small'},
		{as: 'height-tiny'},
		{as: 'height-mini'}
	]
});

w.render('#sample');
