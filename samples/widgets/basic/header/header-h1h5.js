
var w = $.ergo({
	etype: 'box',
	items: [
		{etype: 'html:h1', text: 'Заголовок 1'},
		LOREMIPSUM,
		{etype: 'html:h2', text: 'Заголовок 2'},
		LOREMIPSUM_2,
		{etype: 'html:h3', text: 'Заголовок 3'},
		LOREMIPSUM_3,
		{etype: 'html:h4', text: 'Заголовок 4'},
		LOREMIPSUM_4,
		{etype: 'html:h5', text: 'Заголовок 5'},
		LOREMIPSUM_5
	]
});


w.render('#sample');
