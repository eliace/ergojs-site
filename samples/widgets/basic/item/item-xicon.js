

var w = $.ergo({
	etype: 'list',
	cls: '__indent',
	defaultItem: {
		cls: 'item icon right',
		layout: 'hbox',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48
		},
		$content: {
			etype: 'text',
			$content: {
				etype: '.'
			},
			$description: {
				etype: 'html:small',
				cls: 'description'
			}
		},
		$xicon: {
			etype: 'icon',
			cls: 'fa-remove contextual action'
		},
		set: {
			'avatar': function(v) { this.$image.opt('src', AVATARS_URL+v+'.jpg'); },
			'description': function(v) { this.$content.$description.opt('text', v); }
		}
	},
	items: ITEMS
});

w.render('#sample');

