

var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	as: 'vertical left underlined divided',
	width: 240,
	defaultItem: {
		onClick: 'action:select',
		$content: {
			$label: {
				etype: 'label',
				as: 'float-right small red',
				hidden: true
			},
			set: {
				'label': function(v) {
					this.$label.opt('hidden', !v);
					this.$label.opt('text', v);
				}
			}
		}
	},
	items: [
		{
			text: 'Dashboard'
		}, {
			text: 'Mail',
			$content_label: '5'
		}, {
			text: 'Tasks'
		}
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 0);




$context.split();




var menu2 = $.ergo({
	etype: 'menu',
	include: 'selectable',
	as: 'vertical left',
	width: 240,
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		},
		$content: {
			$label: {
				etype: 'label',
				as: 'float-right small teal',
				hidden: true
			},
			set: {
				'label': function(v) {
					this.$label.opt('hidden', !v);
					this.$label.opt('text', v);
				}
			}
		},
	},
	items: [
		{
			text: 'Dashboard'
		}, {
			text: 'Mail',
			$content_label: '124'
		}, {
			text: 'Tasks'
		}
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu2.render('#sample');

menu2.opt('index', 1);





$context.split();




var menu3 = $.ergo({
	etype: 'menu',
	include: 'selectable',
	as: 'vertical left tabular divided',
	width: 240,
	defaultItem: {
		onClick: 'action:select',
		$content: {
			$label: {
				etype: 'label',
				as: 'float-right small primary circular',
				hidden: true
			},
			set: {
				'label': function(v) {
					this.$label.opt('hidden', !v);
					this.$label.opt('text', v);
				}
			}
		},
	},
	items: [
		{	text: 'Dashboard'	},
		{	text: 'Mail' },
		{	text: 'Tasks',	$content_label: '12' }
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu3.render('#sample');

menu3.opt('index', 0);
