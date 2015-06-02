

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	
	defaultItem: {
		$title: {
		},
		$content: {
			height: 200,
			cls: 'my-widget',
			items: [{
				text: '1'
			}, {
				text: '2'
			}]				
		},
		set: {
			'text': function(v) { this.title.opt('text', v); }
		}
	},
	
	items: [{
		text: 'До:'
	}, {		
		text: 'После:',
		$content: {
			defaultItem: {
				autoHeight: true
			}
		}
	}]	
	
});


// обновляем компоновку
w._layoutChanged();
