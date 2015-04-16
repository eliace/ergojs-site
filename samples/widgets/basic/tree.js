
$context.section('Вложенный список');

var w = $.ergo({
	etype: 'nested-list',
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			}
		}
	},
	items: [{
		text: 'Африка',
		$subtree_items: ['Египет', 'Марокко', 'Кения', 'Ангола']
	}, {
		text: 'Азия',
		$subtree_items: ['Китай', 'Индия', 'Иран', 'Индонезия', 'Ливия', 'Непал']
	}, {
		text: 'Европа',
		$subtree_items: ['Великобритания', 'Германия', 'Италия']
	}]
});

w.render('#sample');





$context.section('Вложенный список + динамические данные');


var tree_data = [{
	text: 'Африка',
	children: [
		{text: 'Египет'},
		{text: 'Марокко'},
		{text: 'Кения'},
		{text: 'Ангола'}
	]
}, {
	text: 'Азия',
	children: [
		{text: 'Китай'},
		{text: 'Индия'},
		{text: 'Иран'},
		{text: 'Индонезия'},
		{text: 'Ливия'},
		{text: 'Непал'}
	]
}, {
	text: 'Европа',
	children: [
		{text: 'Великобритания'},
		{text: 'Германия'},
		{text: 'Италия'}
	]
}]


var w = $.ergo({
	etype: 'nested-list',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			},
			format: '#{text}'
		}
	}
});

w.render('#sample');




$context.section('Отображение всего списка');


var w = $.ergo({
	etype: 'nested-list',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			},
			format: '#{text}'
		},
		// Указываем состояние раскрытия.
		// Но поддерево не отобразится, поскольку оно еще пусто
		state: 'expanded',	
		$subtree: {
			hidden: false  // принудительно меняем видимость пустого поддерева
		}
	}
});

w.render('#sample');




$context.section('Отображение только одного пути');


var w = $.ergo({
	etype: 'nested-list',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			},
			format: '#{text}'
		},
		states: {
			// расширяем описание состояния expanded
			'expanded': function(on) {
				if(on) {
		      this.parent.items.each(function(item) {
		        if(item != this && item.states.is('expanded'))
		          item.states.unset('expanded');
		      }.bind(this));
				}
			}
		}
	}
});

w.render('#sample');




