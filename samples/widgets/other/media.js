

var data = [{
	title: 'Media heading',
	desc: LOREMIPSUM
}];



var w = $.ergo({
	etype: 'box',
	dynamic: true,
	data: data,
	defaultItem: {
		cls: 'media',
		layout: 'column',
		$icon: {
			etype: 'html:img',
			state: 'rounded',
			width: 64,
			src: 'img/avatars/001.jpg'
		},
		$content: {
			$title: {
				etype: 'html:h4',
				dataId: 'title',
				binding: 'text'
			},
			$description: {
				etype: 'inline',
				dataId: 'desc'
			}
		}
	}
});



w.render('#sample');
