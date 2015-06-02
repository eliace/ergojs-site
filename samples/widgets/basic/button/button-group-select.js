
var w = $.ergo({
	etype: 'button-box',
	include: 'selectable',
	cls: 'group',
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		}
	},
	items: ['Кнопка 1', 'Кнопка 2', 'Кнопка 3'],
	selected: 0
});

w.render('#sample');