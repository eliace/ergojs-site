

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


$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'icon'
	},
	items: icons
});


$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'icon',
		state: 'round'
	},
	items: icons
});


