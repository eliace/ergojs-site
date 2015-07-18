

var w = $.ergo({
	etype: 'box',
	cls: 'list __gap',
	defaultItem: {
		etype: 'title'
	},
	items: [
		{cls: 'giant', text: 'Giant'},
//		LOREMIPSUM,
		{cls: 'huge', text: 'Huge'},
//		LOREMIPSUM_2,
		{cls: 'large', text: 'Large'},
//		LOREMIPSUM_3,
		{text: 'Default'},
//		LOREMIPSUM_4,
		{cls: 'small', text: 'Small'},
//		LOREMIPSUM_5,
		{cls: 'tiny', text: 'Tiny'},
//		LOREMIPSUM_6
	]
});


w.render('#sample');
