
var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: '__gap',
//	layout: 'stack',
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

