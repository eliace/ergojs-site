
var icons = [
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
'fa-bar-chart-o',
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
'fa-bolt'
//'fa-bomb',
//'fa-book'
];


$context.section('Простые иконки');
$context.section_begin('icon-basic');
$context.section_end('icon-basic');

$.ergo({
	etype: 'box',
//	layout: 'hbox',
	renderTo: '#sample',
	cls: 'block items gap',
	defaultItem: {
		etype: 'icon'
	},
	items: icons
});


$context.section('Круглые');
$context.section_begin('icon-circular');
$context.section_end('icon-circular');

$.ergo({
	etype: 'box',
	cls: 'block items gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'icon',
		cls: 'circular'
	},
	items: icons
});


$context.section('Контекстные');
$context.section_begin('icon-contextual');
$context.section_end('icon-contextual');

$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
//		layout: 'bar',
		cls: 'items gap padding',
		defaultItem: {
			etype: 'icon',
			cls: 'contextual'
		},
		items: icons
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


