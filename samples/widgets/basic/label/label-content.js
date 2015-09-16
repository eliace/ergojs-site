
var w = $.ergo({
	etype: 'label',
	text: 'Новые',
	$details: {
		etype: 'text',
		text: '15',
		weight: 10,
		as: 'after'
	}
});

w.render('#sample');
