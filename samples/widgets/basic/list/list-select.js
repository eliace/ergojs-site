

var w = $.ergo({
	etype: 'list',
	include: 'selectable',
	as: 'divided',
	defaultItem: {
		layout: 'hbox',
		as: 'item padding',
		onClick: 'action:select',
		$image: {
			etype: 'html:img',
			as: 'circular before',
			width: 40
		},
		$content: {
			etype: 'box',
			layout: 'vbox',
			$content: {
				etype: '.'
			},
			$description: {
				etype: 'html:small',
				as: 'description'
			}
		},
		set: {
			'description': function(v) {
				this.$content.$description.opt('text', v);
			},
			'avatar': function(v) {
				this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg')
			}
		}
	},
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	},
	items: ITEMS
});


w.opt('index', 1);


w.render('#sample');
