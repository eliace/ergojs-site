

var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',
		tag: 'li',

		layout: 'flex',  // ITEM LAYOUT

		as: 'items __gap padding',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
			// style: {
			// 	'margin-right': 8
			// }
		}, {
			binding: 'text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			binding: 'text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			},
			$icon: {
				etype: 'icon',
				as: 'before fa-envelope'
			},
			$content: {
				etype: '.'
			}
		}, {
			binding: 'text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			style: {'flex-grow': 2},
			as: 'contextual action fa-close text-right',
			binding: false,
			weight: 10
		}
	}

});


w.render('#sample');
