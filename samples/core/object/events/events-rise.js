
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
