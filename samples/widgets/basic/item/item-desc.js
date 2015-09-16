

var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item',
		$image: {
			etype: 'html:img',
			as: 'circular before',
			width: 48,
			weight: -10
		},
		$content: {
			// $content: {
			// 	etype: '.'
			// },
			$description: {
				etype: 'html:small',
				as: 'description'
			}
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg'); },
			'description': function(v) { this.$content.$description.opt('text', v); }
		}
	},
	items: ITEMS
});

w.render('#sample');
