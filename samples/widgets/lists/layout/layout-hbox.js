

var w = $.ergo({
	etype: 'list',
	dynamic: true,
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	cls: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',
		html: '<li/>',

		layout: 'hbox',  // ITEM LAYOUT

		cls: 'items gap padding side-icon right',
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
				cls: 'before fa-envelope'
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
			cls: 'right contextual action fa-close',
			binding: false,
			weight: 10
		}
	}
	
});



w.render('#sample');
