
var w = $.ergo({
	etype: 'label',
	text: 'UI',
	$close: {
		etype: 'icon',
		weight: 10,
		as: 'contextual action fa-remove after'
	}
});

w.render('#sample');
