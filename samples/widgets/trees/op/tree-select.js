
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
