

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		as: 'flat'
//		outline: true
	},
	items: [{
		text: 'Default'
	}, {
		text: 'Basic', as: 'basic'
	}, {
		text: 'Primary', as: 'primary'
	}, {
		text: 'Info', as: 'info'
	}, {
		text: 'Success', as: 'success'
	}, {
		text: 'Warning', as: 'warning'
	}, {
		text: 'Danger',	as: 'danger'
	}]
});
