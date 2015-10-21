
$context.section('Основы');
$context.section_begin('events-basic');
$context.section_end('events-basic');

var w = $.ergo({
	etype: 'box',
	
	events: {
		'action': function(e) {
			var t = w.opt('text');
			this.opt('text', Ergo.format('%s action: %s | ', t, e.value));			
		}
	},
	
	// упрощенное объявление обработчика события action
	onAction: function(e) {
		// при возникновении события action меняем текст виджета
		var t = w.opt('text');
		this.opt('text', Ergo.format('%s onAction: %s | ', t, e.value));
	},
	
	text: 'События: '
	
});

w.render('#sample');

// объявление обработчика события otherAction
w.events.on('otherAction', function(e){
	var t = w.opt('text');
	this.opt('text', Ergo.format('%s otherAction: %s ', t, e.value));
});

// вызываем событие action и передаем параметры для перегрузки объекта события
w.events.fire('action', {value: 'значение'});
// вызываем событие otherAction
w.events.fire('otherAction', {value: 2});

$context.section('Подъем (всплытие)', 'Последовательный вызов события для всей цепочки родительских виджетов.');
$context.section_begin('events-rise');
$context.section_end('events-rise');

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	items: [{
		etype: 'box',
		$content: {
			etype: 'button',
			text: 'Нажми меня',
			// событие click одно из событий автоматически генерируемых виджетом
			onClick: function() {
				// вызываем всплывающее событие action и передаем параметры для перегрузки объекта события
				this.events.rise('action', {value: 'click'});				
			}
		}		
	}, {
		etype: 'list'
	}],
	
	// за счет всплывания события вверх по иерархии виджетов, здесь можно задать
	// обработчик события action
	onAction: function(e) {
		// добавляем в список новый элемент
		this.item(1).items.add({
			text: e.value,
			autoRender: true  // отрисовываем элемент сразу после добавления
		});
		
		// если мы не хотим, чтобы событие всплывало дальше, используем метод stop
		e.stop();
	}
	
});

$context.section('Спуск (погружение)', 'Вызов события для всех вложенных виджетов.');
$context.section_begin('events-sink');
$context.section_end('events-sink');


var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	items: [{
		etype: 'box',
		$content: {
			etype: 'button',
			text: 'Нажми меня',
			// событие click одно из событий автоматически генерируемых виджетом
			onClick: function() {
				// вызываем тонущее событие action и передаем параметры для перегрузки объекта события
				this.events.sink('notify', {value: 'click'});				
			},
			$level1: {
				etype: 'box',
				// хоть мы и не увидим эти элементы но события они могут обрабатывать
				autoRender: false,
				$level2x1: {
					onNotify: function(e) { this.events.rise('action', {value: this._key}); }					
				},
				$level2x2: {
					onNotify: function(e) { this.events.rise('action', {value: this._key}); }				
				},
				onNotify: function(e) { this.events.rise('action', {value: this._key}); }
			}
		}		
	}, {
		etype: 'list'
	}],
	
	// за счет всплывания события вверх по иерархии виджетов, здесь можно задать
	// обработчик события action
	onAction: function(e) {
		// добавляем в список новый элемент
		this.item(1).items.add({
			text: e.value,
			autoRender: true  // отрисовываем элемент сразу после добавления
		});
		
		// если мы не хотим, чтобы событие всплывало дальше, используем метод stop
//		e.stop();
	}
	
});



$context.section('Типы', 'При подписке на события контекста, можно связать разные виджеты');
$context.section_begin('events-type');
$context.section_end('events-type');

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


