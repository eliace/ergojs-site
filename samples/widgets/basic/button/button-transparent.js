

var w = $.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'transparent'
//		flat: true
	},
	items: [{
		text: 'Default',
	}, {
		text: 'Basic',
		type: 'basic'
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
	}]
});


