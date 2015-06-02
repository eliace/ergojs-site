

var w = $.ergo({
	etype: 'tool-bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'tool'
	},
	items: [{
		text: 'Default',
		type: 'default'
	}, {
		text: 'Primary',
		type: 'primary'
	}, {
		text: 'Success',
		type: 'success'
	}, {
		text: 'Warning',
		type: 'warning'
	}, {
		text: 'Danger',
		type: 'danger'
	}/*, {
		text: 'Tool',
		type: 'tool'
	}*/]
});


