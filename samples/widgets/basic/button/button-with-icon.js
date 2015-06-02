
var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	cls: 'indented',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: -10,
			cls: 'before'
		},
		$content: {
			etype: '&text'
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
	cls: 'indented',
	defaultItem: {
		etype: 'button',
		$icon: {
			etype: 'icon',
			weight: 10,
			cls: 'after'
		},
		$content: {
			etype: '&text'
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
	}/*, {
		text: 'Tool',
		type: 'tool',
		icon: 'fa-copy'
	}*/]
});

