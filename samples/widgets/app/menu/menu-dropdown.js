


var box = $.ergo({
	etype: 'box',
	include: 'dropdown',
	as: 'text action',
	$content: {
		etype: '.',
		text: 'Dropdown'
	},
	$caret: {
		etype: 'icon',
		as: 'caret'
	},
	$dropdown: {
		etype: 'dropdown-menu',
		as: '__hover',
		items: ['Главная', 'Товары', 'Организации', 'Личный кабинет']
	},
	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	}
});


box.render('#sample');
