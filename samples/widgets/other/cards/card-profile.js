


var profile = $.ergo({
	etype: 'box',
	as: 'card __gap __center',
	width: 240,
	layout: 'vbox',

	$image: {
		etype: 'html:img',
		width: 96,
		src: AVATARS_URL + '004.jpg',
		as: 'image circular'
	},
	$content: {
		etype: 'box',
		as: 'header medium lite',
		text: 'Зайцев Александр Андреевич'
	},
	$desc: {
		etype: 'text',
		as: 'text muted',
		text: 'Ведущий дизайнер'
	}


});





profile.render('#sample');
