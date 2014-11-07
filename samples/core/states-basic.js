

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	states: {
		'blue': 'blue',
		'green': function(on) {
			this.el.toggleClass('green', on);
		},
		'visible': function(on) {
			on ? this.content.el.show() : this.content.el.hide();
		}
	},
	state: 'blue',
	$content: {
		etype: 'html:p',
		hidden: true,
		text: 'Невидимый текст'
	}
});

// выключаем состояние 'blue'
w.states.unset('blue');

// включаем состояние 'green'
w.states.set('green');

// выключаем состояние 'red'. Поскольку состояние не определено, по умолчанию
// устанавливается класс 'red' 
w.states.set('red');




$.ergo({
	etype: 'button',
	renderTo: '#sample',
	text: 'Переключить состояние',
	onClick: function() {
		w.states.toggle('visible');
	}
});


