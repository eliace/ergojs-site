


$.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	defaultItem: {
		etype: 'list',
		cls: 'my-widget',
		defaultItem: {
			$content: {
				etype: 'button'
			}
		},
	},
	
	items: [{
		layout: 'hbox',
		items: ['hbox1', 'hbox2', 'hbox3', 'hbox4', 'hbox5']		
	}, {
		layout: 'hbox',
		cls: 'align-center',
		items: ['hbox1', 'hbox2', 'hbox3', 'hbox4', 'hbox5']		
	}, {
		layout: 'hbox',
		cls: 'align-right',
		items: ['hbox1', 'hbox2', 'hbox3', 'hbox4', 'hbox5']		
	}, {
		layout: 'bar',
		items: ['bar1', 'bar2', 'bar3', 'bar4', 'bar5']		
	}, {
		layout: 'vbox',
		items: ['vbox1', 'vbox2', 'vbox3', 'vbox4', 'vbox5']		
	}, {
		layout: 'stack',
		items: ['stack1', 'stack2', 'stack3', 'stack4', 'stack5']		
	}, {
		layout: 'fluid',
		items: ['fluid1', 'fluid2', 'fluid3', 'fluid4', 'fluid5']		
	}, {
		layout: 'fluid',
		defaultItem: {
			cls: 'pull-right'
		},
		items: ['fluid1', 'fluid2', 'fluid3', 'fluid4', 'fluid5']		
	}, {
		layout: 'fluid',
		items: [
			{text: 'fluid1', cls: 'pull-left'}, 
			{text: 'fluid2', cls: 'pull-left'}, 
			{text: 'fluid3', cls: 'pull-left'}, 
			{text: 'fluid4', cls: 'pull-right'}, 
			{text: 'fluid5', cls: 'pull-right'}
		]		
	}]
	
});

