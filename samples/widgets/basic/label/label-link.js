

var w = $.ergo({
	etype: 'label',
	text: 'Входящие',
	$link: {
		etype: 'link',
		weight: 10,
		cls: 'after',
		text: '37',
		$content: {
			etype: '&text'
		},
		$icon: {
			etype: 'icon',
			weight: -10,
			cls: 'fa-envelope before'				
		}
	}
});

w.render('#sample');

