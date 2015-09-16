
var w = $.ergo({
	etype: 'button-box',
	as: 'group',
	defaultItem: {
		onClick: 'action:select'
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});

w.render('#sample');
