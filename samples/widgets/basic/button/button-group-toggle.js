
var w = $.ergo({
	etype: 'buttons',
	as: 'group',
	defaultItem: {
		onClick: 'action:select'
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});

w.render('#sample');
