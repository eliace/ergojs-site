
$.ergo({
	etype: 'box',
	renderTo: '#sample',
	items: [
		'Item 0', 
		'Item 1', 
		{
			text: 'Item 2',
			wrapper: {
				cls: 'my-widget'
			}
		}
	]
});

