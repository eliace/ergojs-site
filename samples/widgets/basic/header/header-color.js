
var title1 = $.ergo({
	etype: 'title',
	text: 'Green',
	cls: 'large underlined green'
});

var title2 = $.ergo({
	etype: 'title',
	text: 'Blue',
	cls: 'large underlined blue'
});

var title3 = $.ergo({
	etype: 'title',
	text: 'Teal',
	cls: 'large weak underlined teal'
});

var title4 = $.ergo({
	etype: 'title',
	text: 'Orange',
	cls: 'large weak underlined orange'
});



var w = $.ergo({
	etype: 'box',
	cls: 'block',
	items: [ title1, LOREMIPSUM, title2, LOREMIPSUM_2, title3, LOREMIPSUM_3, title4, LOREMIPSUM_4 ]
});


w.render('#sample');
