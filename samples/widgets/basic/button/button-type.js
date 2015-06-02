

var w = $.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button'		
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
		text: 'Info',
		type: 'info'
	}, {
		text: 'Warning',
		type: 'warning'
	}, {
		text: 'Danger',
		type: 'danger'
	}]
});





