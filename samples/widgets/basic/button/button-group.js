
var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	renderTo: '#sample',
	defaultItem: 'button',
	as: 'group',
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	renderTo: '#sample',
	defaultItem: 'button',
	as: 'group',
//	cls: 'btn-box',
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	style: {'margin-top': 16}
});
