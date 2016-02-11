
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',


	defaultItem: {
		$title: {
		},
		$content: {
			height: 80,
			cls: 'my-widget',
//			layout: 'hbox',
			$content: {
				etype: 'html:input',
				text: 'Text'
			}
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
			$content: {
				autoFit: true
			}
		}
	}]

});


// обновляем компоновку
w._layoutChanged();
