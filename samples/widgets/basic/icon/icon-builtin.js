

var w = $.ergo({
	etype: 'box',
	cls: 'block items gap',
	defaultItem: {
		etype: 'icon'
	},
	items: [
		'caret', 
		'caret up', 
		'caret left', 
		'caret right', 
		'caret nw', 
		'caret ne', 
		'caret se', 
		'caret sw', 
		'close',
		'spinner'
	]
});


w.render('#sample');
