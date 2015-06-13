

var w = $.ergo({
	etype: 'list',
	include: 'selectable',
	cls: 'divided',
	defaultItem: {
		layout: 'hbox',
		cls: 'item padding',
		$image: {
			etype: 'html:img',
			cls: 'circular before',
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
				cls: 'description'
			}
		},
		set: {
			'description': function(v) { this.$content.$description.opt('text', v); },
			'avatar': function(v) { this.$image.opt('src', 'demo/blog/img/avatars/'+v+'.jpg') }
		},
		onClick: function() {
			this.events.rise('select');
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


