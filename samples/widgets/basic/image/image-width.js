
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
