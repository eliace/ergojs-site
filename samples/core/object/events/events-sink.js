
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
