
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





w = $.ergo({
	etype: 'box',
	layout: 'bar',
	cls: 'region',
	defaultItem: {
		cls: 'box'
	},
	items: [{
		cls: 'sz-large',
		text: 'sz-large'
	}, {
		cls: 'sz-normal',
		text: 'sz-normal'
	}, {
		cls: 'sz-small',
		text: 'sz-small'
	}, {
		cls: 'sz-tiny',
		text: 'sz-tiny'
	}, {
		text: 'default'
	}]
});

w.render('#sample');




$context.section('Панель инструментов');


w = $.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	defaultItem: {
		layout: 'fluid',
		cls: 'tools region',
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
	}, {
		cls: 'sz-large',
		items: [{}, {state: 'large'}]
	}, {
		cls: 'sz-small',
		items: [{}, {state: 'small'}]
	}, {
		cls: 'sz-tiny',
		items: [{}, {state: 'tiny'}]
	}]
});