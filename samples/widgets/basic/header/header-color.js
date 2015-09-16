
var title1 = $.ergo({
	etype: 'title',
	text: 'Green',
	as: 'large underlined green'
});

var title2 = $.ergo({
	etype: 'title',
	text: 'Blue',
	as: 'large underlined blue'
});

var title3 = $.ergo({
	etype: 'title',
	text: 'Teal',
	as: 'large weak underlined teal'
});

var title4 = $.ergo({
	etype: 'title',
	text: 'Orange',
	as: 'large weak underlined orange'
});



var w = $.ergo({
	etype: 'box',
	as: 'block',
	items: [ title1, LOREMIPSUM, title2, LOREMIPSUM_2, title3, LOREMIPSUM_3, title4, LOREMIPSUM_4 ]
});


w.render('#sample');
