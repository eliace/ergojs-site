

var w = $.ergo({
	etype: 'list',
	as: '__indent',
	defaultItem: {
		etype: 'item',
		layout: 'columns',
		autoClass: true,
		as: 'items-align-top',
		$image: {
			etype: 'html:img',
			as: 'circular before',
			width: 48,
			weight: -10
		},
		$hugeText: {
			etype: 'box',
			text: LOREMIPSUM
		},
		$content: {
			etype: 'box',
			as: 'text-right',
			$description: {
				etype: 'html:small',
				as: 'description'
			},
			weight: 10,
			width: 150
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg'); },
			'description': function(v) { this.$content.$description.opt('text', v); }
		}
	},
	items: ITEMS
});

w.render('#sample');
