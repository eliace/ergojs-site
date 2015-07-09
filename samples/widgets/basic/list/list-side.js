





var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		include: 'xicon',
		cls: 'item has-icon at-right',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40,
			weight: -10
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			cls: 'content',
			$content: {
				etype: '&text'
			},
			$description: {
				etype: 'html:small',
				cls: 'description'
			}
		},
		$xicon: {
			cls: 'right contextual action fa-remove'
		},
		set: {
			'description': function(v) { this.$content.$description.opt('text', v); },
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');





var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		include: 'icon',
		cls: 'item has-icon at-left',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40,
			weight: -10
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			cls: 'content',
			$content: {
				etype: '.'
			},
			$description: {
				etype: 'html:small',
				cls: 'description'
			}
		},
		$icon: {
			cls: 'left contextual action fa-remove',
			weight: -20
		},
		set: {
			'description': function(v) { this.$content.$description.opt('text', v); },
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');




