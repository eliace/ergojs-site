
var w = $.ergo({
	etype: 'box',
	defaultItem: {
		etype: '.'
	},
	items: ['В этом тексте есть ', {etype: 'text', text: 'особенная строчка', style: {'font-weight': 'bold'}}, ', которая обернута тегом <span>']
});

w.render('#sample');

