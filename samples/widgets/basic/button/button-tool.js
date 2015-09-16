

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		as: 'tool'
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
