

var w = $.ergo({
	etype: 'list',
	height: 300,
	style: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
 		etype: 'box',
// //		html: '<li/>',

		layout: 'float',  // ITEM LAYOUT

		as: 'items __gap padding',
		binding: false,
		items: [{
			etype: 'check',
			autoBind: false,
		}, {
			binding: 'prop:text',
			dataId: 'full_name',
			width: 140
		}, {
			etype: 'link',
			include: ['icon:before'],
			icon: 'fa-envelope',
			binding: 'prop:text',
			dataId: 'email',
			width: 160,
			style: {
				'text-overflow': 'ellipsis',
				'overflow': 'hidden',
				'white-space': 'nowrap'
			}
		}, {
			binding: 'prop:text',
			dataId: 'country'
		}],
		$after: {
			etype: 'icon',
			as: 'right contextual action fa-close',
			binding: false,
			weight: 10
		}
	}

});


w.render('#sample');
