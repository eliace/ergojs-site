


	// $(window).on('keydown', function(e) {
	// 	if(e.keyCode == 32) {
	// 		e.preventDefault();
	// //		return false;
	// 	}
	// });



var w = $.ergo({
	etype: 'select',
	text: 'Варианты...',
	as: '+placeholder',
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');
