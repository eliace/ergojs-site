

var w = $.ergo({
	etype: 'box',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		as: 'has-icon at-right',
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'right'
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
		as: 'basic',
		icon: 'fa-edit'
	}, {
		text: 'Primary',
		as: 'primary',
		icon: 'fa-upload'
	}, {
		text: 'Success',
		as: 'success',
		icon: 'fa-check'
	}, {
		text: 'Warning',
		as: 'warning',
		icon: 'fa-warning'
	}, {
		text: 'Danger',
		as: 'danger',
		icon: 'fa-unlock'
	}]
});


w.render('#sample');
