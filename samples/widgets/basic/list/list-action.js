




var w = $.ergo({
	etype: 'list',
//	layout: 'stack',
	as: '__divide __indent',
	defaultItem: {
		etype: 'chip',
//		layout: 'hbox',
		include: 'icon',
//		cls: 'item',
		$icon: {
			as: 'contextual action fa-volume-up medium before'
		},
// 		$image: {
// 			etype: 'html:img',
// 			cls: 'circular before',
// 			width: 40,
// 			weight: -10
// 		},
// 		$content: {
// 			etype: 'box',
// 			layout: 'vbox',
// //			cls: 'content',
// 			$content: {
// 				etype: '.'
// 			},
// 			$description: {
// 				etype: 'html:small',
// 				cls: 'description'
// 			}
//		},
		set: {
//			'description': function(v) { this.content.description.opt('text', v); },
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		}
	},
	items: ITEMS
});

w.render('#sample');
