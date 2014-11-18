var w = $.ergo({
	etype: 'box',
	
	// упрощенное объявление обработчика события action
	onAction: function(e) {
		// при возникновении события action меняем текст виджета
		var t = w.opt('text');
		this.opt('text', Ergo.format('%s action: %s ', t, e.value));
	},
	
	text: 'События: '
	
});

w.render('#sample');

// объявление обработчика события otherAction
w.events.reg('otherAction', function(e){
	var t = w.opt('text');
	this.opt('text', Ergo.format('%s otherAction: %s ', t, e.value));
});

// вызываем событие action и передаем параметры для перегрузки объекта события
w.events.fire('action', {value: 'значение'});
// вызываем событие otherAction
w.events.fire('otherAction', {value: 2});
