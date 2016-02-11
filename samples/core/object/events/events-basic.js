
var w = $.ergo({
	tag: 'div',
	events: {
		'action': function(e) {
			var t = w.opt('text');
			this.opt('text', $ergo.format('%s action: %s | ', t, e.value));
		}
	},

	// упрощенное объявление обработчика события action
	onAction: function(e) {
		// при возникновении события action меняем текст виджета
		var t = w.opt('text');
		this.opt('text', $ergo.format('%s onAction: %s | ', t, e.value));
	},

	text: 'События: '

});

w.render('#sample');

// объявление обработчика события otherAction
w.on('otherAction', function(e){
	var t = w.opt('text');
	this.opt('text', Ergo.format('%s otherAction: %s ', t, e.value));
});

// вызываем событие action и передаем параметры для перегрузки объекта события
w.emit('action', {value: 'значение'});
// вызываем событие otherAction
w.emit('otherAction', {value: 2});
