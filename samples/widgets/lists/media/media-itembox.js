

var w = $.ergo({
	etype: 'box',

	data: data,
	dynamic: true,

	defaultItem: {
		etype: 'item-box',
		$before: {
			etype: 'html:img',
			as: 'rounded',
			width: 64,
			binding: function(v) {
				this.opt('src', 'img/avatars/00'+v.id+'.jpg');
			},
			autoRender: true
//			src: 'img/avatars/001.jpg'
		},
		$content: {
			$title: {
				etype: 'html:h4',
//				text: 'Media heading'
				dataId: 'title',
				binding: 'text'
			},
			$description: {
				etype: 'text',
//				text: LOREMIPSUM,
				dataId: 'desc'
			}
		},
		$after: {
			etype: 'text',
//			text: '25 ноября',
//			cls: 'align-top',
			dataId: 'date',
			autoRender: true
		}
	}
});


w.render('#sample');
