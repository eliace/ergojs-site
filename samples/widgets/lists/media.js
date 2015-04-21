

var data = [{
	title: 'Media heading',
	desc: LOREMIPSUM,
	date: '25/11/14',
	id: 1
}, {
	title: 'Media heading',
	desc: LOREMIPSUM_2,
	date: '26/11/14',
	id: 2
}, {
	title: 'Media heading',
	desc: LOREMIPSUM_3,
	date: '27/11/14',
	id: 3
}, {
	title: 'Media heading',
	desc: LOREMIPSUM_4,
	date: '28/11/14',
	id: 4
}, {
	title: 'Media heading',
	desc: LOREMIPSUM_5,
	date: '29/11/14',
	id: 5
}];



$context.section('Media list (column layout)');


var w = $.ergo({
	etype: 'box',

	data: data,
	dynamic: true,

	defaultItem: {
		layout: 'column',
		$icon: {
			etype: 'html:img',
			cls: 'rounded align-middle',
			width: 64,
			binding: function(v) {
				this.opt('src', 'img/avatars/00'+v.id+'.jpg');
			}
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
		$date: {
			etype: 'text',
//			text: '25 ноября',
			cls: 'align-top',
			dataId: 'date'
		}
	}
});


w.render('#sample');





$context.section('Media list (item-box)');


var w = $.ergo({
	etype: 'box',

	data: data,
	dynamic: true,

	defaultItem: {
		etype: 'item-box',
		$before: {
			etype: 'html:img',
			cls: 'rounded',
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










