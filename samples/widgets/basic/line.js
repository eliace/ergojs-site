

var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: '&text'
	},
	items: ['В этом тексте есть ', {etype: 'text', text: 'особенная строчка'}, ' которая обернута тегом <span>']
});

w.render('#sample');
