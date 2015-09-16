
w = $.ergo({
	etype: 'html:nav',
	as: 'navigation underlined has-icon at-left at-right padding medium',
	layout: 'float',
	$icon: {
		etype: 'icon',
		as: 'fa-chevron-left contextual left'
	},
	$xicon: {
		etype: 'icon',
		weight: 100,
		as: 'fa-bars contextual right'
	},
	$content: {
		etype: 'box',
		$clock: {
			text: '10:00',
			as: 'nav-clock'
		},
	}
});

w.render('#sample');
