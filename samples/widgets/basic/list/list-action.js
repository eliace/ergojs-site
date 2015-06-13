




var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		include: 'icon',
		cls: 'item',
		$icon: {
			cls: 'contextual action fa-angle-right fa-2x'
		},
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
//			cls: 'content',
			$content: {
				etype: '&text'
			},
			$description: {
				etype: 'html:small',
				cls: 'description'
			}
		},
		set: {
			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');




