
var w = $.ergo({
	etype: 'button-box',
	include: 'selectable',
	as: 'group',
	defaultItem: {
		onClick: 'action:select'
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	selected: 0
});

w.render('#sample');
