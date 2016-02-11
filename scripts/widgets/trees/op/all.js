
$context.section('Вложенный список');
$context.section_begin('tree-nested');
$context.section_end('tree-nested');

var w = $.ergo({
	etype: 'tree',
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
		$sub__items: ['Египет', 'Марокко', 'Кения', 'Ангола']
	}, {
		text: 'Азия',
		$sub__items: ['Китай', 'Индия', 'Иран', 'Индонезия', 'Ливия', 'Непал']
	}, {
		text: 'Европа',
		$sub__items: ['Великобритания', 'Германия', 'Италия']
	}]
});

w.render('#sample');

$context.section('Вложенный список + динамические данные');
$context.section_begin('tree-dynamic');
$context.section_end('tree-dynamic');

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
	etype: 'tree',
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


$context.section('Открытие всех вложений');
$context.section_begin('tree-expand-all');
$context.section_end('tree-expand-all');

var w = $.ergo({
	etype: 'tree',
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
		$sub: {
			hidden: false  // принудительно меняем видимость пустого поддерева
		}
	}
});

w.render('#sample');


$context.section('Открытие пути');
$context.section_begin('tree-expand-path');
$context.section_end('tree-expand-path');

// создаем примесь
Ergo.alias('includes:expand-path', {

	expandPath: function(path, effects) {

		var path_a = path.split(':');

		if(path_a.length > 1) {

			var found = null;
			var item_name = path_a.shift();

			this.items.each(function(item) {
				if(item.prop('name') == item_name)
					found = item;
			});

			if(found) {
				if(effects === false) found.$sub._no_effects = true;
				found.set('expanded');
				found.$sub.expandPath(path_a.join(':'));
				if(effects === false) delete found.$sub._no_effects;
			}

		}

	}

});



var w = $.ergo({
	etype: 'tree',
	data: tree_data,
	include: 'expand-path',
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.toggle('expanded');
			},
			format: '#{text}'
		},
		binding: function(v) {
			this.prop('name', v.text);
		},
		$sub: {
			include: 'expand-path'
		}
	}
});

w.render('#sample');

w.expandPath('Азия:Китай', false);
w.expandPath('Европа:Германия:Мюнхен', false);

$context.section('Выбор элемента вложенного списка');
$context.section_begin('tree-select');
$context.section_end('tree-select');

var w = $.ergo({
	etype: 'tree',
	data: tree_data,
	include: 'selectable',  // примесь для работы с выборкой
	cls: 'demo-tree',
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
	selection: {
		lookup: function(v) {
			return this.findPath(v);
		}
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

$context.section('Эксклюзивное отображение пути');
$context.section_begin('tree-exclusive');
$context.section_end('tree-exclusive');


var w = $.ergo({
	etype: 'tree',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.toggle('expanded');
				this.rise('nodeExpanded');
			},
			format: '#{text}'
		},
		onNodeExpanded: function() {
			// схлапываем соседние узлы
      this.parent.items.each(function(item) {
        if(item != this && item.is('expanded')) {
          item.unset('expanded');
				}
      }.bind(this));

		}
	}
});

w.render('#sample');

