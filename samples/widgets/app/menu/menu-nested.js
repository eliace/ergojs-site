


var menu = $.ergo({
	etype: 'nested-menu',
	include: 'selectable',
	as: 'vertical left',
	width: 240,
	defaultItem: {
		$content: {
			include: 'icon',
			as: 'has-icon at-right',
			$icon: {
				as: 'before'
			},
			$caret: {
				etype: 'icon',
				as: 'caret right',
				point: 'right',
				autoRender: false,
				states: {
					'down:point': 'point-down',
					'right:point': 'point-right'
				}
			},
			onClick: 'action:expand'
		},
		$submenu: {
			etype: 'menu',
			hidden: true,
			as: 'side left nested',
			defaultItem: {
				onClick: 'action:select',
				get: {
					'name': function() { return this.opt('text'); }
				}
			},
//			state: 'hidden',
			include: 'effects',
			effects: {
				'show': {type: 'slideDown', delay: 300},
				'hide': {type: 'slideUp', delay: 300}
			}
		},
		onExpand: function() {
			this.states.toggle('expanded');
		},
		states: {
			'expanded': function(on) {
				on ? this.$submenu.show() : this.$submenu.hide();
				this.$content.$caret.states.toggle('down', on);
			}
		},
		set: {
			'expandable': function(v) {
				if(v) {
					this.$content.$caret.options.autoRender = true;
				}
			}
		}
	},
	items: [
		{	text: 'Dashboard', $content_icon: 'fa-dashboard'	},
		{	text: 'Mail', $content_icon: 'fa-envelope',	$submenu_items: ['Inbox', 'Sent', 'Trash'], expandable: true },
		{	text: 'Tasks', $content_icon: 'fa-tasks'	}
	],
	selection: {
		lookup: function(v) {
			var found = null;
			this.items.each(function(item) {
				var f = item.$submenu.item(v);
				if(f)
					found = f;
			});
			return found;
		}
	},
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 'Sent');
