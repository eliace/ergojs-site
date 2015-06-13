

var w = $.ergo({
	etype: 'list',
	cls: 'gap',
	defaultItem: {
		etype: 'item',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48,
			weight: -10
		},
		$content: {
			// $content: {
			// 	etype: '.'
			// },
			$description: {
				etype: 'html:small',
				cls: 'description'
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

