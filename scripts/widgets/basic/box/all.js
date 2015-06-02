
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

$context.section('Промежутки', 'Задается расстояние между элементами');
$context.section_begin('box-indent');
$context.section_end('box-indent');

var w = $.ergo({
	etype: 'box',
	cls: 'indented',
	layout: 'hbox',
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
	cls: 'indented',
	layout: 'vbox',
	defaultItem: {
		etype: 'button'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});

w.render('#sample');


$context.section('Отступы', 'Задается расстояние от границы от границы');
$context.section_begin('box-size');
$context.section_end('box-size');


var box1 = $.ergo({
	etype: 'box',
	cls: 'box tiny bordered indented',
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
	cls: 'box small bordered indented',
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
	cls: 'box bordered indented',
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
	cls: 'box large bordered indented',
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
	cls: 'box huge bordered indented',
	defaultItem: {
		etype: 'button',
		cls: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});





var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	cls: 'indented',
	items: [ box1, box2, box3, box4, box5 ]
});


w.render('#sample');



//$context.section('Панель инструментов', 'Выравнивание элементов за счет отступов');
// require box-fluid
