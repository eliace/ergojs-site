

var w = $.ergo({
	etype: 'list',
	as: '__gap',
	defaultItem: {
		etype: 'item',
		$image: {
			etype: 'image',
			as: 'circular small before',
//			width: 48,
			weight: -10
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');
