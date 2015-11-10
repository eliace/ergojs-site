


	// $(window).on('keydown', function(e) {
	// 	if(e.keyCode == 32) {
	// 		e.preventDefault();
	// //		return false;
	// 	}
	// });



var w = $.ergo({
	etype: 'select',
//	placeholder: 'Варианты...',
//	as: '+placeholder',
	$content: {
		placeholder: 'Варианты...'
	},
	$dropdown: {
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	}
});


w.render('#sample');
