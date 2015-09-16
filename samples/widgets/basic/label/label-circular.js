

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
//	layout: 'bar',
	defaultItem: {
		etype: 'label',
		as: 'circular'
	},
	items: [
		{	text: 'default', as: 'default' },
		{	text: 'primary', as: 'primary' },
		{	text: 'success', as: 'success' },
		{	text: 'info', as: 'info' },
		{	text: 'warning', as: 'warning' },
		{	text: 'danger',	as: 'danger' }
	]
});

w.render('#sample');


$.ergo({etype: 'html:br', renderTo: '#sample'});


var w = $.ergo({
	etype: 'box',
//	layout: 'bar',
	as: 'items __gap',
//	style: {'margin-top': 16},
	defaultItem: {
		etype: 'label',
		as: 'circular'
	},
	items: [
		{	text: '1', as: 'default' },
		{	text: '-3', as: 'basic'	},
		{	text: '2', as: 'primary' },
		{	text: '30',	as: 'success' },
		{	text: '40',	as: 'info' },
		{	text: '500', as: 'warning' },
		{	text: '600', as: 'danger' }
	]
});




w.render('#sample');
