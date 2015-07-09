


var w = $.ergo({
	etype: 'box',

	cls: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	$content: {
		etype: '.',
		text: 'Пользователь'
	},

	$dropdown: {
		cls: '__hover',
		defaultItem: {
			include: '+image',
			$image: {
				width: 32,
				cls: 'circular before'
			}
		},
		items: [
			{image: AVATARS_URL + '001.jpg', text: 'Волков А.Н.'},
			{image: AVATARS_URL + '002.jpg', text: 'Зайцев И.Д.'},
			{image: AVATARS_URL + '003.jpg', text: 'Лисицина О.Е.'},
			{image: AVATARS_URL + '004.jpg', text: 'Медведев К.Г.'}
		]
	}


});


w.render('#sample');


