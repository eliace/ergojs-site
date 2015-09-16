

var w = $.ergo({
	etype: 'label',
	text: 'Входящие',
	$link: {
		etype: 'link',
		weight: 10,
		as: 'after',
		text: '37',
		$content: {
			etype: '.'
		},
		$icon: {
			etype: 'icon',
			weight: -10,
			as: 'fa-envelope before'
		}
	}
});

w.render('#sample');
