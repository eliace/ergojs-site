

var w = $.ergo({
	etype: 'select',

	$content: {
		etype: 'html:input',
		placeholder: 'Сторона света',
	},

	$dropdown_items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']

});


w.render('#sample');