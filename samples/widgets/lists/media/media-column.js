

var w = $.ergo({
	etype: 'box',

	data: data,
	dynamic: true,

	defaultItem: {
		layout: 'columns',
		$icon: {
			etype: 'html:img',
			as: 'circular align-middle',
			width: 64,
			binding: function(v) {
				this.opt('src', 'img/avatars/00'+v.id+'.jpg');
			}
//			src: 'img/avatars/001.jpg'
		},
		$content: {
			etype: 'text',
			$title: {
				etype: 'html:h4',
//				text: 'Media heading'
				dataId: 'title',
				binding: 'prop:text'
			},
			$description: {
				etype: 'text',
//				text: LOREMIPSUM,
				dataId: 'desc'
			}
		},
		$date: {
			etype: 'text',
//			text: '25 ноября',
			as: 'align-top',
			dataId: 'date'
		}
	}
});


w.render('#sample');
