
// w = $.ergo({
// 	etype: 'box',
// 	width: 800,
// 	$header: {
// 		etype: 'html:h4',
// 		cls: 'title underlined',
// 		$content: {
// 			etype: '.',
// 			text: 'Заголовок'
// 		}
// 	},
// 	$content: LOREMIPSUM
// });



var w = $.ergo({
	etype: 'box',
	items: [{
		etype: 'title',
		text: 'Заголовок',
		as: 'divided'		
	},
	LOREMIPSUM]
});


w.render('#sample');
