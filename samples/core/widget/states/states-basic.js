
var b = $.ergo({
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


