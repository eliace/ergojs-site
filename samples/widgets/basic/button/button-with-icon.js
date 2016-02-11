
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: -10,
			as: 'before'
		},
		$content: {
			etype: '.'
		},
		set: {
			'icon': function(v) {
				this.$icon.opt('icon', v);
			}
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
	}/*, {
		text: 'Tool',
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});


$.ergo({
	etype: 'html:br',
	renderTo: '#sample'
});



var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	as: 'items __gap',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'after'
		},
		$content: {
			etype: '.'
		},
		set: {
			'icon': function(v) { this.$icon.opt('icon', v); }
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
	}/*, {
		text: 'Tool',
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});
