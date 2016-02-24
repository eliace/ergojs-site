
var w = $.ergo({
	etype: 'select',
  as: '+disabled',
	$content: {
		placeholder: 'Disabled'
	},
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');
