
var w = $.ergo({
	etype: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	$content: {
		etype: '.',
		text: 'Страны'
	},

	$dropdown: {
		as: '__hover',
		items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
	}

});


w.render('#sample');
