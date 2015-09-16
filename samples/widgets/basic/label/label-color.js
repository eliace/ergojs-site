
var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
//	layout: 'bar',
	defaultItem: 'label',
	items: [
		{	text: 'default' },
		{	text: 'basic', as: 'basic' },
		{	text: 'primary', as: 'primary' },
		{	text: 'success', as: 'success' },
		{ text: 'info',	as: 'info' },
		{	text: 'warning', as: 'warning' },
		{	text: 'danger',	as: 'danger' }
	]
});


w.render('#sample');
