
var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	style: {'margin-top': 16},
//	width: 600,
	cls: 'divided padded',
	defaultItem: {
		layout: 'hbox',
		cls: 'box-medium',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			$content: {
				etype: '&text'
			},
			$description: {
				etype: 'text',
				cls: 'description'
			}
		},
		$button: {
			etype: 'label',
			text: 'online',
			cls: 'fluid-right success small'
		},
		set: {
			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');

