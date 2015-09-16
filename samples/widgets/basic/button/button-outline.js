
var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		as: 'outlined'
//		outline: true
	},
	items: [
		{	text: 'Default'	},
		{	as: 'basic', text: 'Basic' },
		{	as: 'primary', text: 'Primary' },
		{	as: 'success', text: 'Success' },
		{	as: 'warning', text: 'Warning' },
		{	as: 'danger', text: 'Danger' }
	]
});
