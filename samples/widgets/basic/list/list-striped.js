

var w = $.ergo({
	etype: 'list',
	cls: 'striped padded',
	defaultItem: {
		layout: 'hbox',
		cls: 'item box padding',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
			width: 40
		},
		$content: {
			etype: '&text'
		},
		set: {
			'avatar': function(v) { this.image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');


