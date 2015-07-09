

var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'box secondary',
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		}
	},
	items: ['Главная', 'Товары', 'Организации', 'Личный кабинет'],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 0);