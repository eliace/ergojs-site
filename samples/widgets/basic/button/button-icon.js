
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'items __gap',
	defaultItem: {
		etype: 'button',
		cls: 'icon-button',
		include: 'icon'
		// $icon: {
		// 	etype: 'icon'
		// },
		// set: {
		// 	'icon': function(v) { this.icon.opt('icon', v); }
		// }
	},
	items: [{
//		type: 'default',
		icon: 'fa-filter'
	}, {
		type: 'basic',
		icon: 'fa-edit'
	}, {
		type: 'primary',
		icon: 'fa-upload'
	}, {
		type: 'success',
		icon: 'fa-check'
	}, {
		type: 'warning',
		icon: 'fa-warning'
	}, {
		type: 'danger',
		icon: 'fa-unlock'
	}/*, {
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});

