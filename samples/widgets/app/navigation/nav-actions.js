
w = $.ergo({
	etype: 'html:nav',
	cls: 'navigation underlined has-icon at-left at-right padding medium',
	layout: 'fluid',
	$icon: {
		etype: 'icon',
		cls: 'fa-chevron-left contextual left'
	},
	$xicon: {
		etype: 'icon',
		weight: 100,
		cls: 'fa-bars contextual right'
	},
	$content: {
		etype: 'box',
		$clock: {
			text: '10:00',
			cls: 'nav-clock'
		},
	}
});

w.render('#sample');

