

var w = $.ergo({
	etype: 'box',
	as: 'list __gap',
	defaultItem: {
		etype: 'title'
	},
	items: [
		{as: 'giant', text: 'Giant'},
//		LOREMIPSUM,
		{as: 'huge', text: 'Huge'},
//		LOREMIPSUM_2,
		{as: 'large', text: 'Large'},
//		LOREMIPSUM_3,
		{text: 'Default'},
//		LOREMIPSUM_4,
		{as: 'small', text: 'Small'},
//		LOREMIPSUM_5,
		{as: 'tiny', text: 'Tiny'},
//		LOREMIPSUM_6
	]
});


w.render('#sample');
