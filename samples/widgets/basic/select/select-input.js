

var w = $.ergo({
	etype: 'select',

	'-include': 'focusable',

	$content: {
		etype: 'html:input',
		placeholder: 'Сторона света'
	},

	$dropdown_items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']

});



w.render('#sample');
