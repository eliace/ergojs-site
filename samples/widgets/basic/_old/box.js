
var w = $.ergo({
	etype: 'box',
	text: 'Hello there!'
});

w.render('#sample');


var w2 = $.ergo({
	etype: 'box',
	text: 'Hello there 2!'
});

w2.render('#sample');



$context.section('Размеры отступов', 'box-indent');


w = $.ergo({
	etype: 'box',
	layout: 'bar',
	cls: 'region',
	defaultItem: {
		cls: 'box'
	},
	items: [{
		cls: 'box-large',
		text: 'box-large'
	}, {
		cls: 'box-medium',
		text: 'box-medium'
	}, {
		cls: 'box-small',
		text: 'box-small'
	}, {
		cls: 'box-tiny',
		text: 'box-tiny'
	}]
});

w.render('#sample');


$context.section_end('box-indent');



$context.section('Панель инструментов (Fluid)', 'box-fluid');


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


$context.section_end('box-fluid');
