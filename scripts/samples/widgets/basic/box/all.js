
$context.section('Бокс');
$context.section_begin('box-basic');
$context.section_end('box-basic');


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


$context.section('Размеры', 'Определяются величиной отступов');
$context.section_begin('box-indent');
$context.section_end('box-indent');



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



$context.section('Панель инструментов', 'Выравнивание элементов за счет отступов');
$context.section_begin('box-fluid');
$context.section_end('box-fluid');


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





