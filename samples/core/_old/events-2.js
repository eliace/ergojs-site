
$context.alert('Подъем (всплытие) - последовательный вызов события для всей цепочки родительских виджетов.');


var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	items: [{
		etype: 'box',
		content: {
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



$context.alert('Спуск (погружение) - вызов события для всех вложенных виджетов.');


var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	items: [{
		etype: 'box',
		content: {
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


