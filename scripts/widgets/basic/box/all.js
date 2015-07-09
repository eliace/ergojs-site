
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

$context.section('Item gap', 'Задается расстояние между элементами. Используется для элементов с существующим отступом или границей');
$context.section_begin('box-gap');
$context.section_end('box-gap');



var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'border __gap',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		cls: 'border __gap',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			cls: 'border'
		},
		items: [ 'Item1', 'Item2', 'Item3' ]
	},
	items: [ {}, {}, {} ]
});

w.render('#sample');




$context.section('Item indent', 'Задается отступ до границы. Используется для элементов, у которых нет отступа или границы');
$context.section_begin('box-indent');
$context.section_end('box-indent');




$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'border __indent',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		cls: 'border __indent',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			cls: 'border'
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
	cls: 'items border padding __gap',
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
	cls: 'items border padding __gap',
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
	cls: 'items border padding __gap',
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
	cls: 'items border padding __gap',
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
	cls: 'items border padding __gap',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});





var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: '__gap',
	items: [ box1, box2, box3, box4, box5 ]
});


w.render('#sample');



//$context.section('Панель инструментов', 'Выравнивание элементов за счет отступов');
// require box-fluid
