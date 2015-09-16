
var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'split-button',
		$dropdown_items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
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
