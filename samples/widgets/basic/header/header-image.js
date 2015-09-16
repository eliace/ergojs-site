
w = $.ergo({
	etype: 'html:h3',
	as: 'title',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/003.jpg',
		as: 'image circular small before'
	},
	$content: {
		etype: '.',
		text: 'Волкова Е.И.'
	},
//	style: {'margin-bottom': 24} //FIXME
});

w.render('#sample');



w = $.ergo({
	etype: 'html:h3',
	as: 'title',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/002.jpg',
		as: 'image circular small before'
	},
	$content: {
		etype: 'text',
		text: 'Лисицын А.Н.',
		$content: {
			etype: '.',
		},
		$subtitle: {
			etype: 'title',
			as: 'sub',
			text: 'Ведущий веб-разработчик'
		}
	}
});

w.render('#sample');
