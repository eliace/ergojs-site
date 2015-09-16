
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		as: 'icon-button',
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
		as: 'basic',
		icon: 'fa-edit'
	}, {
		as: 'primary',
		icon: 'fa-upload'
	}, {
		as: 'success',
		icon: 'fa-check'
	}, {
		as: 'warning',
		icon: 'fa-warning'
	}, {
		as: 'danger',
		icon: 'fa-unlock'
	}/*, {
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});
