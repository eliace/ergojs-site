

$context.section('Переключение', 'В простейшем случае состояние - аналог класса');
$context.section_begin('states-basic');
$context.section_end('states-basic');

var b = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	states: {
		'blue': 'blue',
		'green': function(on) {
			this.el.toggleClass('green', on);
		},
		'visible': function(on) {
			on ? this.$content.show() : this.$content.hide();
		}
	},
	stt: 'blue',
	$content: {
		tag: 'p',
		hidden: true,
		text: 'Невидимый текст'
	}
});

// выключаем состояние 'blue'
b.states.unset('blue');

// включаем состояние 'green'
b.states.set('green');

// выключаем состояние 'red'. Поскольку состояние не определено, по умолчанию
// устанавливается класс 'red'
b.states.set('red');




$.ergo({
	etype: 'button',
	renderTo: '#sample',
	text: 'Переключить состояние',
	onClick: function() {
		b.states.toggle('visible');
	}
});

$context.section('Переходы', 'Действия при переходе из одного состояние в другое. Как правило, это анимация');
$context.section_begin('states-transitions');
$context.section_end('states-transitions');

var t = $.ergo({
	etype: 'box',
	text: LOREMIPSUM,
	transitions: {
		// переход из любого состояния в 'large'
		'* > large': function() {
			this._font_size = this.el.css('font-size');				// запомним текущий размер шрифта
			return this.el.animate({'font-size': 20}, 600);
		},
		// переход из состояния 'large' в любое другое
		'large > *': function() {
			return this.el.animate({'font-size': this._font_size}, 600);
		}
	},
	states: {
		'red': function(on) {
			this.el.css({'color': (on ? 'red' : '')});
		}
	}
});



$.ergo({
	etype: 'button',
	renderTo: '#sample',
	text: 'Переключить состояние',
	onClick: function() {
		t.states.toggle('large')
			// свяжем переход к состоянию 'large' с изменением состояния 'red'
			.then(function(){
				t.states.toggle('red', t.states.is('large'));
			});
	}
});



t.render('#sample');

$context.section('Группы', 'Состояния в одной группе являются эксклюзивными, т.е. в одно и то же время виджет может иметь только одно состояние из группы');
$context.section_begin('states-groups');
$context.section_end('states-groups');

var g = $.ergo({
	etype: 'box',
	renderTo: '#sample',

	defaultItem: {
		etype: 'icon',
		states: {
			// задаем набор состояний с группой 'fa'
			fa: {
				'icon1': 'fa-calculator',
				'icon2': 'fa-calendar',
				'icon3': 'fa-calendar-o',
				'icon4': 'fa-camera',
				'icon5': 'fa-bug'
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
				'icon1': 'fa-calculator',
				'icon2': 'fa-calendar',
				'icon3': 'fa-calendar-o',
				'icon4': 'fa-camera',
				'icon5': 'fa-bug'
			}
		}
	},
	onClick: function() {
		var i = this.opt('index');
		this.opt('index', (i < 5) ? i+1 : 1);
	},
	set: {
		'index': function(v) {
			this.$icon.states.set('icon'+v);
		}
	},
	index: 1
});

