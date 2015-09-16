

var w = $.ergo({
	etype: 'list',
	as: 'striped padded',
	defaultItem: {
		layout: 'hbox',
		as: 'item box padding',
		$image: {
			etype: 'html:img',
			as: 'circular before',
			width: 40
		},
		$content: {
			etype: '.'
		},
		set: {
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');
