
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
		{
			text: 'Великобритания',
			children: [
				{text: 'Лондон'},
				{text: 'Дублин'},
				{text: 'Ливерпуль'},
				{text: 'Бирмингем'}
			]
		},
		{
			text: 'Германия',
			children: [
				{text: 'Берлин'},
				{text: 'Мюнхен'},
				{text: 'Гамбург'}
			]
		},
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




$context.section('Отображение всех вложений');


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
				this.rise('nodeExpanded');
			},
			format: '#{text}'
		},
		onNodeExpanded: function() {
			// схлапываем соседние узлы
      this.parent.items.each(function(item) {
        if(item != this && item.states.is('expanded'))
          item.states.unset('expanded');
      }.bind(this));

		}
	}
});

w.render('#sample');





$context.section('Выбор элемента вложенного списка');

var w = $.ergo({
	etype: 'nested-list',
	data: tree_data,
	mixins: ['selectable'],  // примесь для работы с выборкой
	cls: 'nested-list',
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
				this.rise('nodeSelected', {key: this.parent.path()});
			},
			format: '#{text}'
		},
		binding: function(v) {
			this.opt('name', v.text);
		}
	},
	selector: function(v) {
		return this.findPath(v);
	},
	onNodeSelected: function(e) {
		this.opt('index', e.key);
	},
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});

// устанавливаем выбранное значение
w.opt('index', 'Азия');

w.render('#sample');





$context.section('Открытие пути');


var expand_fn = function(path) {

	var path_a = path.split(':');

	if(path_a.length > 1) {

		var found = null;
		var item_name = path_a.shift();

		this.items.each(function(item) {
			if(item._name == item_name)
				found = item;
		});

		if(found) {
			found.states.set('expanded');
			found.subtree.expand_path(path_a.join(':'));
		}

	}

};


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
		binding: function(v) {
			this.opt('name', v.text);
		},
		$subtree: {
			mixins: [{
				expand_path: expand_fn
			}]
		}
	},
	mixins: [{
		expand_path: expand_fn
	}]
});

w.render('#sample');

w.expand_path('Азия:Китай');
w.expand_path('Европа:Германия:Мюнхен');


