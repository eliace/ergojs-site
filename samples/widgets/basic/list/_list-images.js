
var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'indented',
//	style: {'margin-top': 16},
	defaultItem: {
		layout: 'hbox',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 48
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			$content: {
				etype: 'link',
				cls: 'title'
			},
			$description: {
				etype: 'text'
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

