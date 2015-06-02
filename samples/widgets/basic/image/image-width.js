
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

