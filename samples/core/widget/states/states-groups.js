
var g = $.ergo({
	etype: 'box',
	renderTo: '#sample',

	defaultItem: {
		etype: 'icon',
		states: {
			// задаем набор состояний с группой 'fa'
			fa: {
				'icon1': 'cls:fa-calculator',
				'icon2': 'cls:fa-calendar',
				'icon3': 'cls:fa-calendar-o',
				'icon4': 'cls:fa-camera',
				'icon5': 'cls:fa-bug'
			}
		}
	},

	items: [{
		stt: 'icon1'		// обычный способ установить состояние (группа не указывается)
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
		as: 'after',
		states: {
			// задаем набор состояний с группой 'fa'
			fa: {
				'icon1': 'cls:fa-calculator',
				'icon2': 'cls:fa-calendar',
				'icon3': 'cls:fa-calendar-o',
				'icon4': 'cls:fa-camera',
				'icon5': 'cls:fa-bug'
			}
		}
	},
	onClick: function() {
		var i = this.opt('index');
		this.opt('index', (i < 5) ? i+1 : 1);
	},
	set: {
		'index': function(v) {
			this.$icon.set('icon'+v);
		}
	},
	index: 1
});
