

var w = $.ergo({
	etype: 'list',
	cls: '__indent',
	defaultItem: {
		etype: 'item',
		layout: {
			etype: 'columns',
			autoClass: true
		},
		cls: 'items-align-top',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48,
			weight: -10
		},
		$hugeText: {
			etype: 'box',
			text: LOREMIPSUM
		},
		$content: {
			etype: 'box',
			cls: 'text-right',
			$description: {
				etype: 'html:small',
				cls: 'description'
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
