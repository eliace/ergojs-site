

var w = $.ergo({
	etype: 'select',
	text: 'Варианты...',
	state: 'placeholder',
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');