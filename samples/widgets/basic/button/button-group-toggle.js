
var w = $.ergo({
	etype: 'button-box',
	cls: 'group',
	defaultItem: {
		onClick: function() {
			this.states.toggle('selected');
		}
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3']
});

w.render('#sample');