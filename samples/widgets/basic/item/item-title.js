

var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'chip',
		$image: {
			as: 'circular before',
		},
		$content: {
			$content: {
				tag: 'h4',
				as: 'title'
			},
			$description: {
				etype: '.'
			}
		},
		set: {
			'avatar': function(v) { this.$image.prop('src', AVATARS_URL+v+'.jpg'); }
		}
	},
	items: ITEMS
});

w.render('#sample');
