

var w = $.ergo({
	etype: 'list',
	as: '__indent',
	defaultItem: {
		as: 'item icon right',
		layout: 'hbox',
		$image: {
			etype: 'html:img',
			as: 'circular before',
			width: 48
		},
		$content: {
			etype: 'text',
			$content: {
				etype: '.'
			},
			$description: {
				etype: 'html:small',
				as: 'description'
			}
		},
		$xicon: {
			etype: 'icon',
			as: 'fa-remove contextual action'
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg'); },
			'description': function(v) { this.$content.$description.opt('text', v); }
		}
	},
	items: ITEMS
});

w.render('#sample');
