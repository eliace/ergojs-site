

var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	as: 'box underlined divided',
	defaultItem: {
		onClick: 'action:select'
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
