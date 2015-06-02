
var w = $.ergo({
	etype: 'box',
	text: 'Наведи курсор на меня',
	
	events: {
		// событие виджета
		'action': function(e) {
			$context.alert('Поддержка событий обеспечивается плагином Observable');
		},
		// события jQuery определяются через префикс
		'jquery:mouseenter': function(e) {
			this.el.css('background-color', 'blue');
		},
		'jquery:mouseleave': function(e) {
			this.el.css('background-color', '');
		},
		'ctx:action': function(e) {
			$context.alert('Событие контекста: ' + e.value);			
		}
	}
	
});

w.render('#sample');


// вызываем обработчик событий виджета
w.events.fire('action');




var w2 = $.ergo({
	etype: 'button',
	text: 'Нажми меня',
	onClick: function() {
		$context.events.fire('action', {value: 'Нажата кнопка'});
	}
});

w2.render('#sample');


