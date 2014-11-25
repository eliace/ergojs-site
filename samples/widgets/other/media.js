

var data = [{
	title: 'Media heading',
	desc: LOREMIPSUM
}];



var w = $.ergo({
	etype: 'box',
	// dynamic: true,
	// data: data,
	items: [{
//		cls: 'media',
		layout: 'column',
		$icon: {
			etype: 'html:img',
			state: 'rounded',
			width: 64,
			src: 'img/avatars/001.jpg',
			style: {
				'vertical-align': 'top'
			}
		},
		$content: {
			$title: {
				etype: 'html:h4',
				text: 'Media heading'
				// dataId: 'title',
				// binding: 'text'
			},
			$description: {
				etype: 'inline',
				text: LOREMIPSUM
//				dataId: 'desc'
			}
		},
		$date: {
			etype: 'inline',
			text: '25 ноября',
			style: {
				'vertical-align': 'top'
			}
		}
	}, {
//		cls: 'media',
//		layout: 'column',
		// style: {
			// 'position': 'relative'
		// },
		etype: 'item-box',
		$before: {
			etype: 'html:img',
			state: 'rounded',
			width: 64,
			src: 'img/avatars/003.jpg',
			autoRender: true
			// style: {
				// 'position': 'absolute',
				// 'top': '50%',
				// 'margin-top': -32
			// }
		},
		$content: {
			style: {
				'margin-left': 64,
				'margin-right': 64
			},
			$title: {
				etype: 'html:h4',
				text: 'Media heading'
				// dataId: 'title',
				// binding: 'text'
			},
			$description: {
				etype: 'inline',
				text: LOREMIPSUM_3
//				dataId: 'desc'
			}
		},
		$after: {
			etype: 'inline',
			text: '25 ноября',
			autoRender: true
			// style: {
				// 'position': 'absolute',
				// 'right': 0,
				// 'top': '50%',
				// 'margin-top': -9
			// }
		}
	}]
});



w.render('#sample');
