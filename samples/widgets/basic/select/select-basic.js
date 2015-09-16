

var w = $.ergo({
	etype: 'select',
	text: 'Варианты...',
	as: 'placeholder',
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');
