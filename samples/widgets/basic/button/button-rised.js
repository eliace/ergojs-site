



var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'rised'
//		outline: true
	},
	items: [{
		text: 'Default'
	}, {
		text: 'Basic', type: 'basic'
	}, {
		text: 'Primary', type: 'primary'
	}, {
		text: 'Info', type: 'info'
	}, {
		text: 'Success', type: 'success'
	}, {
		text: 'Warning', type: 'warning'
	}, {
		text: 'Danger',	type: 'danger'
	}]
});

