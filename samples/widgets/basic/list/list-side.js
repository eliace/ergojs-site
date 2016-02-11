





var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	as: 'divided padded',
	defaultItem: {
		etype: 'chip',
		include: 'icon:at-right',
		$icon: {
			as: 'contextual action fa-remove'
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
	as: 'divided padded',
	defaultItem: {
		etype: 'chip',
		include: 'icon:at-left',
		$icon: {
			as: 'contextual action fa-remove',
			weight: -20
		},
		set: {
			'avatar': function(v) { this.opt('img', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');
