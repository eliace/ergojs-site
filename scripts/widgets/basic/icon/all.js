
var ICONS = [
'fa-adjust',
'fa-anchor',
'fa-archive',
'fa-area-chart',
'fa-arrows',
'fa-arrows-h',
'fa-arrows-v',
'fa-asterisk',
'fa-at',
'fa-automobile',
'fa-ban',
'fa-bank',
'fa-bar-chart',
'fa-barcode',
'fa-bars',
'fa-beer',
'fa-bell',
'fa-bell-o',
'fa-bell-slash',
'fa-bell-slash-o',
'fa-bicycle',
'fa-binoculars',
'fa-birthday-cake',
'fa-bolt',
//'fa-bomb',
'fa-book'
];



var COLORS = [
	'red',
	'pink',
	'purple',
	'deep-purple',
	'indigo',
	'blue',
	'light-blue',
	'cyan',
	'teal',
	'green',
	'light-green',
	'lime',
	'yellow',
	'amber',
	'orange',
	'deep-orange',
	'brown',
	'grey',
	'blue-grey',

	'black',
	''
];


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

$.ergo({
	etype: 'box',
	cls: 'block items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'icon',
		cls: 'circular'
	},
	items: ICONS
});


$context.section('Контекстные');
$context.section_begin('icon-contextual');
$context.section_end('icon-contextual');

$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
//		layout: 'bar',
		cls: 'items __gap padding',
		defaultItem: {
			etype: 'icon',
			cls: 'contextual'
		},
		items: ICONS
	},
	items: [
		{cls: 'bg-basic'},
		{cls: 'bg-primary'},
		{cls: 'bg-info'},
		{cls: 'bg-success'},
		{cls: 'bg-warning'},
		{cls: 'bg-danger'}
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
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon'
	},
	items: colored_icons
});


var box2 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'circular'
	},
	items: colored_icons
});


var box3 = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'icon',
		cls: 'circular inverted'
	},
	items: colored_icons
});



var w = $.ergo({
	etype: 'box',
//	layout: 'vbox',
	cls: 'box vertical __gap',
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

