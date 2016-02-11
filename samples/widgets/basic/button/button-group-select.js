
var w = $.ergo({
	etype: 'buttons',
	include: 'selectable',
	as: 'group',
	defaultItem: {
		onClick: 'rise:select'
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	selected: 0
});

w.render('#sample');
