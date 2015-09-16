


var w = $.ergo({
	etype: 'box',

	as: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	$content: {
		etype: '.',
		text: 'Транспорт'
	},

	$dropdown: {
		as: '__hover',
		defaultItem: {
			include: 'icon:before'
		},
		items: [
			{icon: 'fa-cab', text: 'Такси'},
			{icon: 'fa-bus', text: 'Автобус'},
			{icon: 'fa-train', text: 'Поезд'},
			{icon: 'fa-plane', text: 'Самолет'}
		]
	}


});


w.render('#sample');
