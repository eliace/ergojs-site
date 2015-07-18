


var profile = $.ergo({
	etype: 'box',
	cls: 'card __gap __center',
	width: 240,
	layout: 'vbox',

	$image: {
		etype: 'html:img',
		width: 96,
		src: AVATARS_URL + '004.jpg',
		cls: 'image circular'
	},
	$content: {
		etype: 'box',
		cls: 'header medium lite',
		text: 'Зайцев Александр Андреевич'
	},
	$desc: {
		etype: 'text',
		cls: 'text muted',
		text: 'Ведущий дизайнер'
	}


});





profile.render('#sample');
