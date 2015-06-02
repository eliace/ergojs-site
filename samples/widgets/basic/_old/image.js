

$context.section('Размер по ширине');

var w = $.ergo({
	etype: 'box',
	layout: 'stack',
	defaultItem: {
		etype: 'html:img',
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


var w = $.ergo({
	etype: 'box',
	layout: 'stack',
	defaultItem: {
		etype: 'html:img',
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