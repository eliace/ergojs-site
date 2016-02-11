
$context.section('Основы');
$context.section_begin('events-basic');
$context.section_end('events-basic');

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
				this.rise('action', {value: 'click'});
			}
		}
	}, {
		etype: 'list'
	}],

	// за счет всплывания события вверх по иерархии виджетов, здесь можно задать
	// обработчик события action
	onAction: function(e) {
		// добавляем в список новый элемент
		var item = this.item(1).items.add({
			text: e.value,
		})

		// отрисовываем элемент
		item.render();

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
		$content: {
			etype: 'button',
			text: 'Нажми меня',
			// событие click одно из событий автоматически генерируемых виджетом
			onClick: function() {
				// вызываем тонущее событие action и передаем параметры для перегрузки объекта события
				this.sink('notify', {value: 'click'});
			},
			$level1: {
				etype: 'box',
				// хоть мы и не увидим эти элементы но события они могут обрабатывать
				autoRender: false,
				$level2x1: {
					onNotify: function(e) { this.rise('action', {value: this._key}); }
				},
				$level2x2: {
					onNotify: function(e) { this.rise('action', {value: this._key}); }
				},
				onNotify: function(e) { this.rise('action', {value: this._key}); }
			}
		}
	}, {
		etype: 'list'
	}],

	// за счет всплывания события вверх по иерархии виджетов, здесь можно задать
	// обработчик события action
	onAction: function(e) {

		// получаем список
		var list = this.item(1);

		// добавляем в список новый элемент
		list.items.add({
			text: e.value
		});

		// перерисовываем список
		list.render();

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
			$context.alert('Поддержка событий обеспечивается примесью Observable');
		},
		// на события VDOM можно подписаться через префикс
		'vdom:mouseenter': function(e) {
			this.el.css('background-color', 'blue');
		},
		'vdom:mouseleave': function(e) {
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


