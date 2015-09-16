

var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item',
		$image: {
			etype: 'html:img',
			as: 'image circular before',
			width: 48,
			weight: -10
		},
		$content: {
			$content: {
				etype: 'html:h4',
				as: 'title'
			},
			$description: {
				etype: '.'
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
