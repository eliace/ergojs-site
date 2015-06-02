

w = $.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	defaultItem: {
		layout: 'fluid',
		cls: 'region box-default',
		defaultItem: {
			cls: 'tool-item'
		},
		items: [
			{etype: 'text', text: 'Text'}, 
			{etype: 'button', text: 'Button'}, 
			{etype: 'link', text: 'Link'}, 
			{etype: 'icon', state: 'fa fa-cog'},
			{etype: 'text-box', width: 100},
			{etype: 'select-box', width: 100}
		]		
	},
	items: [{
		cls: 'large',
		items: [{}, {state: 'large'}]
	}, {
		// default
	}, {
		cls: 'small',
		items: [{}, {state: 'small'}]
	}, {
		cls: 'tiny',
		items: [{}, {state: 'tiny'}]
	}]
});




