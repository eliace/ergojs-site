

var w = $.ergo({
	etype: 'list',
	height: 300,
	css: {
		'overflow-y': 'auto'
	},
	as: 'bordered',
	data: data,
	defaultItem: {
		etype: 'box',

		layout: 'hbox',  // LAYOUT

		as: '__gap padding has-icon at-right',
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
			css: {
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
