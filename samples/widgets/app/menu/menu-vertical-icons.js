

var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	as: 'vertical',
	width: 240,
	defaultItem: {
		onClick: 'action:select',
		$content: {
			include: 'icon:after',
			$icon: {
				as: 'float-right'
			}
		},
		set: {
			'icon': function(v) {
				this.$content.opt('icon', v);
			}
		}
	},
	items: [
		{
			text: 'Dashboard',
			icon: 'fa-dashboard'
		}, {
			text: 'Mail',
			icon: 'fa-envelope'
		}, {
			text: 'Tasks',
			icon: 'fa-tasks'
		}
	],
	set: {
		'index': function(v) {
			this.selection.set(v);
		}
	}
});


menu.render('#sample');

menu.opt('index', 1);
