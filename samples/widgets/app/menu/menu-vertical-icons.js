

var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'vertical',
	width: 240,
	defaultItem: {
		onClick: function() {
			this.events.rise('select');
		},
		$content: {
			include: 'after-icon',
			$icon: {
				cls: 'float-right'
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

