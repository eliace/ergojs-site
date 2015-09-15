


//var SIZES = ['tiny', 'small', 'medium', 'large', 'huge', 'giant'];



$context.section('Простые иконки');
$context.section_begin('icon-basic');
$context.section_end('icon-basic');

$.ergo({
	etype: 'box',
//	layout: 'hbox',
	renderTo: '#sample',
	cls: 'block items __gap',
	defaultItem: {
		etype: 'icon'
	},
	items: ICONS
});


$context.section('Круглые');
$context.section_begin('icon-circular');
$context.section_end('icon-circular');

var w = $.ergo({
	etype: 'box',
	as: 'block items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'circular'
	},
	items: ICONS
});

w.render('#sample');

$context.section('Контекстные');
$context.section_begin('icon-contextual');
$context.section_end('icon-contextual');

$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
//		layout: 'bar',
		cls: 'box items __gap padding',
		defaultItem: {
			etype: 'icon',
			cls: 'contextual'
		},
		items: ICONS
	},
	items: [
		{cls: 'basic'},
		{cls: 'primary'},
		{cls: 'info'},
		{cls: 'success'},
		{cls: 'warning'},
		{cls: 'danger'}
	]

});


$context.section('Системные');
$context.section_begin('icon-builtin');
$context.section_end('icon-builtin');


var w = $.ergo({
	etype: 'box',
	cls: 'block items __gap',
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

$context.section('Боковые');
$context.section_begin('icon-side');
$context.section_end('icon-side');



var box1 = $.ergo({
	etype: 'text',
	text: 'Текст',
	cls: 'has-icon at-left bg-basic padding',
	$icon: {
		etype: 'icon',
		cls: 'left fa-user',
		weight: -10
	}
});



var box2 = $.ergo({
	etype: 'text',
	text: 'Текст',
	cls: 'has-icon at-right bg-basic padding',
	$icon: {
		etype: 'icon',
		cls: 'right fa-search',
		weight: 10
	}
});



var box3 = $.ergo({
	etype: 'text',
	text: 'Текст',
	cls: 'has-icon at-left at-right bg-basic padding',
	$icon: {
		etype: 'icon',
		cls: 'left fa-user',
		weight: -10
	},
	$xicon: {
		etype: 'icon',
		cls: 'right fa-search',
		weight: 10
	}
});



var w = $.ergo({
	etype: 'box',
	layout: 'hbox',
	cls: '__gap',
	items: [ box1, box2, box3 ]
});


w.render('#sample');
$context.section('Цвет');
$context.section_begin('icon-color');
$context.section_end('icon-color');

var colored_icons = [];

COLORS.forEach(function(c, i) {
	colored_icons.push({icon: ICONS[i], cls: COLORS[i]});
});



var box1 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon'
	},
	items: colored_icons
});


var box2 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'circular'
	},
	items: colored_icons
});


var box3 = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'icon',
		as: 'circular inverted'
	},
	items: colored_icons
});



var w = $.ergo({
	etype: 'box',
//	layout: 'vbox',
	as: 'box vertical __gap',
	items: [ box1, box2, box3 ]
});


w.render('#sample');

$context.section('Размер');
$context.section_begin('icon-size');
$context.section_end('icon-size');



var box1 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'fa-book'
	},
	items: [
		{cls: 'tiny'},
		{cls: 'small'},
		{cls: 'medium'},
		{cls: 'large'},
		{cls: 'huge'},
		{cls: 'giant'}
	]
});


box1.render('#sample');
$context.section('Метка');
$context.section_begin('icon-label');
$context.section_end('icon-label');


var colored_icons = [];

COLORS.forEach(function(c, i) {
	colored_icons.push({icon: ICONS[i], cls: COLORS[i]});
});



var box1 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'label'
	},
	items: colored_icons
});


box1.render('#sample');
$context.section('Кнопка');
$context.section_begin('icon-button');
$context.section_end('icon-button');


var colored_icons = [];

COLORS.forEach(function(c, i) {
	colored_icons.push({icon: ICONS[i], cls: COLORS[i]});
});



var box1 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'button'
	},
	items: colored_icons
});


box1.render('#sample');
