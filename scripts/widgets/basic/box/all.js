
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
	as: 'border __gap',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		as: 'border __gap',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			as: 'border'
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
	as: 'border __indent',
	defaultItem: {
		etype: 'box',
		layout: 'hbox',
		as: 'border __indent',
		defaultItem: {
			etype: 'text',
			text: 'TEXT',
			as: 'border'
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
	as: 'items border __gap box',
	include: 'label',
	label: 'No',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box2 = $.ergo({
	etype: 'box',
	as: 'items border __gap box padding lite',
	include: 'label',
	label: 'Lite',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box3 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Normal',
	as: 'items border __gap box padding normal',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box4 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Heavy',
	as: 'items border __gap box padding heavy',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});


var box5 = $.ergo({
	etype: 'box',
	include: 'label',
	label: 'Massive',
	as: 'items border __gap box padding massive',
	defaultItem: {
		etype: 'button',
		as: 'basic'
	},
	items: [ 'Item1', 'Item2', 'Item3' ]
});





var w = $.ergo({
	etype: 'box',
	layout: 'vbox',
	as: '__gap',
	items: [ box1, box2, box3, box4, box5 ]
});


w.render('#sample');

$context.section('Цвета');
$context.section_begin('box-color');
$context.section_end('box-color');



var box = $.ergo({
	etype: 'box',
	layout: 'hbox',
	defaultItem: {
		as: 'lite padding box',
//		width: 80
	},
	items: [
		{as: 'red', text: 'red'},
		{as: 'pink', text: 'pink'},
		{as: 'purple', text: 'purple'},
		{as: 'deep-purple', text: 'deep-purple'},
		{as: 'indigo', text: 'indigo'},
		{as: 'blue', text: 'blue'},
		{as: 'light-blue', text: 'light-blue'},
		{as: 'cyan', text: 'cyan'},
		{as: 'teal', text: 'teal'},
		{as: 'green', text: 'green'},
		{as: 'light-green', text: 'light-green'},
		{as: 'lime', text: 'lime'},
		{as: 'yellow', text: 'yellow'},
		{as: 'amber', text: 'amber'},
		{as: 'orange', text: 'orange'},
		{as: 'deep-orange', text: 'deep-orange'},
		{as: 'brown', text: 'brown'},
		{text: 'default'},
		{as: 'grey', text: 'grey'},
		{as: 'blue-grey', text: 'blue-grey'},
		{as: 'black', text: 'black'}
	]
});


box.render('#sample');



var box2 = $.ergo({
	etype: 'box',
	layout: 'hbox',
	defaultItem: {
		as: 'lite padding inverted box',
//		width: 80
	},
	items: [
		{as: 'red', text: 'red'},
		{as: 'pink', text: 'pink'},
		{as: 'purple', text: 'purple'},
		{as: 'deep-purple', text: 'deep-purple'},
		{as: 'indigo', text: 'indigo'},
		{as: 'blue', text: 'blue'},
		{as: 'light-blue', text: 'light-blue'},
		{as: 'cyan', text: 'cyan'},
		{as: 'teal', text: 'teal'},
		{as: 'green', text: 'green'},
		{as: 'light-green', text: 'light-green'},
		{as: 'lime', text: 'lime'},
		{as: 'yellow', text: 'yellow'},
		{as: 'amber', text: 'amber'},
		{as: 'orange', text: 'orange'},
		{as: 'deep-orange', text: 'deep-orange'},
		{as: 'brown', text: 'brown'},
		{text: 'default'},
		{as: 'grey', text: 'grey'},
		{as: 'blue-grey', text: 'blue-grey'},
		{as: 'black', text: 'black'}
	]
});


box2.render('#sample');




var box3 = $.ergo({
	etype: 'box',
	layout: 'hbox',
	defaultItem: {
		as: 'lite padding filled box',
//		width: 80
	},
	items: [
		{as: 'red', text: 'red'},
		{as: 'pink', text: 'pink'},
		{as: 'purple', text: 'purple'},
		{as: 'deep-purple', text: 'deep-purple'},
		{as: 'indigo', text: 'indigo'},
		{as: 'blue', text: 'blue'},
		{as: 'light-blue', text: 'light-blue'},
		{as: 'cyan', text: 'cyan'},
		{as: 'teal', text: 'teal'},
		{as: 'green', text: 'green'},
		{as: 'light-green', text: 'light-green'},
		{as: 'lime', text: 'lime'},
		{as: 'yellow', text: 'yellow'},
		{as: 'amber', text: 'amber'},
		{as: 'orange', text: 'orange'},
		{as: 'deep-orange', text: 'deep-orange'},
		{as: 'brown', text: 'brown'},
		{text: 'default'},
		{as: 'grey', text: 'grey'},
		{as: 'blue-grey', text: 'blue-grey'},
		{as: 'black', text: 'black'}
	]
});


box3.render('#sample');

$context.section('Линии');
$context.section_begin('box-line');
$context.section_end('box-line');


var w = $.ergo({
  etype: 'box',
  layout: 'hbox',
  as: '__gap margin',
  defaultItem: {
    as: 'line paper',
    width: 100,
    height: 50
  },
  items: [{
    as: 'red'
  }, {
    as: 'green'
  }, {
    as: 'blue'
  }, {
    as: 'orange'
  }, {
    as: 'purple'
  }]
});

w.render('#sample');



var w = $.ergo({
  etype: 'box',
  layout: 'hbox',
  as: '__gap margin',
  defaultItem: {
    as: 'line paper',
    width: 100,
    height: 50
  },
  items: [{
    as: 'red line-left'
  }, {
    as: 'green line-top'
  }, {
    as: 'blue line-right'
  }, {
    as: 'orange line-bottom'
  }]
});

w.render('#sample');


//$context.section('Панель инструментов', 'Выравнивание элементов за счет отступов');
// require box-fluid
