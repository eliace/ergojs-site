

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',

	defaultItem: {
		$title: {
		},
		$content: {
			cls: 'my-widget',
			etype: 'box',
			height: 200,
			items: [{
				style: { 'float': 'left'},
				width: '56%',
				text: 'Left'
			}, {
				style: { 'float': 'right'},
				width: '38%',
				text: 'Right'
			}]

		},
		set: {
			'text': function(v) { this.$title.opt('text', v); }
		}
	},

	items: [{
		text: 'До:'
	}, {
		text: 'После:',
		$content: {
			defaultItem: {
				autoHeight: 'ignore-siblings'    // игнорируем высоту соседних элементов
			}
		}
	}]
});

// обновляем компоновку
w._layoutChanged();
