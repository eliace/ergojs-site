
$.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
//		cls: 'icon-button',
		$icon: {
			etype: 'icon'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		},
		cls: 'circular'
//		round: true
	},
	items: [{
		type: 'default',
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


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});



$.ergo({
	etype: 'box',
	cls: 'indented',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
//		cls: 'icon-button',
		$icon: {
			etype: 'icon'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		},
		cls: 'circular',
//		round: true,
		size: 'large'
	},
	items: [{
		type: 'default',
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


