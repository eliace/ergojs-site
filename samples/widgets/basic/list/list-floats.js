
var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	style: {'margin-top': 16},
//	width: 600,
	cls: 'divided padded',
	defaultItem: {
		etype: 'chips',
		$button: {
			etype: 'label',
			text: 'online',
			cls: 'float-right success small'
		},
		set: {
//			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');

