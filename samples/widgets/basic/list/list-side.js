





var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	cls: 'divided padded',
	defaultItem: {
		etype: 'chips',
		include: 'icon:at-right',
		$icon: {
			cls: 'contextual action fa-remove'
		},
		set: {
			'avatar': function(v) { this.opt('img', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');





var w = $.ergo({
	etype: 'list',
	cls: 'divided padded',
	defaultItem: {
		etype: 'chips',
		include: 'icon:at-left',
		$icon: {
			cls: 'contextual action fa-remove',
			weight: -20
		},
		set: {
			'avatar': function(v) { this.opt('img', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');




