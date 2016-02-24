
var w = $.ergo({
	etype: 'select',
	$content: {
		placeholder: 'Варианты...'
	},
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');
