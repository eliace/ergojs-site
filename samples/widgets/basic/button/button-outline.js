
var w = $.ergo({
	etype: 'box',
	cls: 'items gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		cls: 'outlined'
//		outline: true
	},
	items: [{
		text: 'Default'//, type: 'default'
	}, {
		text: 'Basic', type: 'basic'
	}, {
		text: 'Primary', type: 'primary'
	}, {
		text: 'Success', type: 'success'
	}, {
		text: 'Warning', type: 'warning'
	}, {
		text: 'Danger',	type: 'danger'
	}/*, {
		text: 'Tool',
		type: 'tool'
	}*/]
});

