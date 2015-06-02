
$.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		$dropdown_items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
	},
	items: [{
		text: 'Default',
		type: 'default'
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
	}/*, {
		text: 'Tool',
		type: 'tool'
	}*/]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


$.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		$content: {
			state: 'dropup'
		},
		$dropdown: {
			state: 'dropup',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
	},
	items: [{
		text: 'Default',
		type: 'default'
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
	}/*, {
		text: 'Tool',
		type: 'tool'
	}*/]
});

