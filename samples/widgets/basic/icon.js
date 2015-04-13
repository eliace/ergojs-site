

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
'fa-bolt',
'fa-bomb',
'fa-book'
];


$context.section('Простые иконки');


$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	cls: 'box',
	defaultItem: {
		etype: 'icon'
	},
	items: icons
});


$context.section('Круглые иконки');


$.ergo({
	etype: 'box',
	layout: 'bar',
	cls: 'box',
	renderTo: '#sample',
	defaultItem: {
		etype: 'icon',
		state: 'round'
	},
	items: icons
});




$context.section('Контекстные иконки');


$.ergo({
	etype: 'box',
	renderTo: '#sample',
	defaultItem: {
		layout: 'bar',
		cls: 'box',
		defaultItem: {
			etype: 'icon',
			cls: 'contextual'
		},
		items: icons
	},
	items: [
		{cls: 'default'},
		{cls: 'primary'},
		{cls: 'info'},
		{cls: 'success'},
		{cls: 'warning'},
		{cls: 'danger'}
	]

});