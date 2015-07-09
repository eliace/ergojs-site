


var box = $.ergo({
	etype: 'box',
	include: 'dropdown',
	cls: 'text action',
	$content: {
		etype: '.',
		text: 'Dropdown'
	},
	$caret: {
		etype: 'icon',
		cls:' caret'
	},
	$dropdown: {
		etype: 'dropdown-menu',
		cls: '__hover',
		items: ['Главная', 'Товары', 'Организации', 'Личный кабинет']
	},
	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	}
});


box.render('#sample');