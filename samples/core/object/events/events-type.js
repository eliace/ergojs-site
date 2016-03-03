
var w = $.ergo({
	etype: 'box',
	text: 'Наведи курсор на меня',

	events: {
		// событие виджета
		'action': function(e) {
			$context.alert('Поддержка событий обеспечивается примесью Observable');
		},
		// на события VDOM можно подписаться через префикс
		'dom:mouseenter': function(e) {
			this.el.css('background-color', 'blue');
		},
		'dom:mouseleave': function(e) {
			this.el.css('background-color', '');
		},
		// на события контекста тоже можно подписаться через префикс
		'context:action': function(e) {
			$context.alert('Событие контекста: ' + e.value);
		}
	}

});

w.render('#sample');


// вызываем обработчик событий виджета
w.emit('action');


var w2 = $.ergo({
	etype: 'button',
	text: 'Нажми меня',
	onClick: function() {
		$context.events.fire('action', {value: 'Нажата кнопка'});
	}
});

w2.render('#sample');
