
var g = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	defaultItem: {
		etype: 'icon',
		states: {
			// задаем набор состояний с группой 'fa'
			'icon1:fa': 'fa-calculator',
			'icon2:fa': 'fa-calendar',
			'icon3:fa': 'fa-calendar-o',
			'icon4:fa': 'fa-camera',
			'icon5:fa': 'fa-bug'
		}		
	},
	
	items: [{
		state: 'icon1'		// обычный способ установить состояние (группа не указывается)
	}, {
		fa: 'icon2'				// если опция отсутствует, то виджет может интерпретировать ее как группу состояний 
	}, 
	'icon3'							// особенность виджета icon
	]
	
});




$.ergo({
	etype: 'button',
	renderTo: '#sample',
	text: 'Нажать для переключения иконки',
	// $content: {
		// etype: 'text'
	// },
	$icon: {
		etype: 'icon',
		cls: 'after',
		states: {
			// задаем набор состояний с группой 'fa'
			'icon1:fa': 'fa-calculator',
			'icon2:fa': 'fa-calendar',
			'icon3:fa': 'fa-calendar-o',
			'icon4:fa': 'fa-camera',
			'icon5:fa': 'fa-bug'
		}
	},
	onClick: function() {
		var i = this.opt('index');
		this.opt('index', (i < 5) ? i+1 : 1);
	},
	set: {
		'index': function(v) {
			this.icon.states.set('icon'+v);
		}
	},
	index: 1
});
