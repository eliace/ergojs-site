
$context.section('Бокс');
$context.section_begin('box-basic');
$context.section_end('box-basic');


var box1 = $.ergo({
	etype: 'box',
	text: 'Hello there!'
});


var box2 = $.ergo({
	etype: 'box',
	text: 'Hello there 2!'
});


var w = $.ergo({
	etype: 'box',
	items: [ box1, box2 ]
});

w.render('#sample');

$context.section('Item gap (compact)', 'Задается расстояние между элементами. Используется для элементов с существующим отступом или границей');
$context.section_begin('box-indent');
$context.section_end('box-indent');

var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: 'gap',
	defaultItem: {
		etype: 'button'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});

w.render('#sample');


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'gap',
	defaultItem: {
		etype: 'button'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});

w.render('#sample');



$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'list',
	cls: 'gap bordered',
	defaultItem: {
		etype: 'box',
		cls: 'box gap bordered',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			cls: 'bordered'
		},
		items: [ 'Item1', 'Item2', 'Item3' ]
	},
	items: [ {}, {}, {} ]
});

w.render('#sample');




$context.section('Item indent (relax)', 'Задается отступ до границы. Используется для элементов, у которых нет отступа или границы');
$context.section_begin('box-padding');
$context.section_end('box-padding');




$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'indent bordered',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		cls: 'indent bordered',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			cls: 'bordered'
		},
		items: [ 'Item1', 'Item2', 'Item3' ]
	},
	items: [ {}, {}, {} ]
});

w.render('#sample');


$context.section('Отступы', 'Задается расстояние от всех границ');
$context.section_begin('box-size');
$context.section_end('box-size');


var box1 = $.ergo({
	etype: 'box',
	cls: 'border padding items gap',
	include: 'label',
	label: 'Tiny',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box2 = $.ergo({
	etype: 'box',
	cls: 'border padding items gap',
	include: 'label',
	label: 'Small',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box3 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Default',
	cls: 'border padding items gap',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box4 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Large',
	cls: 'border padding items gap',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box5 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Huge',
	cls: 'border padding items gap',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});





var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'gap',
	items: [ box1, box2, box3, box4, box5 ]
});


w.render('#sample');



//$context.section('Панель инструментов', 'Выравнивание элементов за счет отступов');
// require box-fluid
