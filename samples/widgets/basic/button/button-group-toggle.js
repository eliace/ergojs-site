
var w = $.ergo({
	etype: 'buttons',
	as: 'group',
	defaultItem: {
		onClick: 'toggle:selected'
		// onClick: function() {
		// 	this.states.toggle('selected');
		// }
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});

w.render('#sample');
