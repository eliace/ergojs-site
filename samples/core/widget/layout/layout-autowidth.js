
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	
	defaultItem: {
		$title: {
		},
		$content: {
			cls: 'my-widget',
			$content: {
				etype: 'html:input',
				text: 'Text'
			}
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
			$content: {
				autoWidth: true
			}
		}
	}]	
	
});


// обновляем компоновку
w._layoutChanged();
