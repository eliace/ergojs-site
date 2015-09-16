
$.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		$dropdown: {
			as: '__hover',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
	},
	items: [{
		text: 'Default',
//		type: 'default'
	}, {
		text: 'Basic',
		as: 'basic'
	}, {
		text: 'Primary',
		as: 'primary'
	}, {
		text: 'Success',
		as: 'success'
	}, {
		text: 'Warning',
		as: 'warning'
	}, {
		text: 'Danger',
		as: 'danger'
	}]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});


$.ergo({
	etype: 'box',
	as: 'items __gap',
	renderTo: '#sample',
	defaultItem: {
		etype: 'dropdown-button',
		drop: 'up',
		// $content: {
		// 	state: 'dropup'
		// },
		$dropdown: {
//			state: 'dropup',
			as: '__hover',
			items: ['Action', 'Another action', 'Something else here', '|', 'Separated link']
		}
	},
	items: [{
		text: 'Default',
//		type: 'default'
	}, {
		text: 'Basic',
		as: 'basic'
	}, {
		text: 'Primary',
		as: 'primary'
	}, {
		text: 'Success',
		as: 'success'
	}, {
		text: 'Warning',
		as: 'warning'
	}, {
		text: 'Danger',
		as: 'danger'
	}]
});
