

var w = $.ergo({
	etype: 'box',
	layout: 'stack',
	renderTo: '#sample',
	items: [{
		layout: 'bar',
		defaultItem: {
			etype: 'html:span',
			cls: 'tag'
		},
		items: [
			{text: 'default', state: 'default'},
			{text: 'primary', state: 'primary'},
			{text: 'success', state: 'success'},
			{text: 'warning', state: 'warning'},
			{text: 'danger', state: 'danger'},
		]
	}, {
		layout: 'bar',
		defaultItem: {
			etype: 'html:span',
			cls: 'badge',
			binding: 'prop:text'
		},
		items: [
			{value: 10, state: 'default'},
			{value: 20, state: 'primary'},
			{value: 30, state: 'success'},
			{value: 40, state: 'warning'},
			{value: 1000, state: 'danger'},
		]
	}]
});
