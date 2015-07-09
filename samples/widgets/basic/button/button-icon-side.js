

var w = $.ergo({
	etype: 'box',
	cls: 'items __gap',
	defaultItem: {
		etype: 'button',
		cls: 'has-icon at-right',
		$icon: {
			etype: 'icon',
			weight: 10,
			cls: 'right'
		},
		$content: {
			etype: '.'
		},
		set: {
			'icon': function(v) { this.icon.opt('icon', v); }
		}
	},
	items: [{
		text: 'Default',
		icon: 'fa-filter'
	}, {
		text: 'Basic',
		type: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		type: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		type: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		type: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		type: 'danger',
		icon: 'fa-unlock'
	}]
});


w.render('#sample');
