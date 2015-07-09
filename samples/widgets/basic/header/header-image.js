
w = $.ergo({
	etype: 'html:h3',
	cls: 'header box',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/003.jpg',
		cls: 'circular'
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
	cls: 'header box',
	$image: {
		etype: 'html:img',
		src: 'demo/blog/img/avatars/002.jpg',
		cls: 'circular'
	},
	$title: {
		etype: 'text',
		text: 'Лисицын А.Н.',
		$content: {
			etype: '.',
		},
		$subtitle: {
			etype: 'text',
			cls: 'sub-header',
			text: 'Ведущий веб-разработчик'
		}
	}
}); 

w.render('#sample');


