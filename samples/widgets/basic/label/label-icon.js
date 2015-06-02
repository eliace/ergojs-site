
var w = $.ergo({
	etype: 'label',
	text: '42',
	$icon: {
		etype: 'icon',
		weight: -10,
		cls: 'fa-envelope before'
	}
});

w.render('#sample');

