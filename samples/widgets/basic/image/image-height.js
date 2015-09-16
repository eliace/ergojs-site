
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
