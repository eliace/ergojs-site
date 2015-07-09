
var box = $.ergo({
	etype: 'box',
	cls: 'has-sidebar at-left',
	$sidebar: {
		etype: 'html:aside',
		cls: 'sidebar',
		$header: {
			etype: 'html:h3',
			text: 'M',
			cls: 'header'
		},
		$menu: {
			etype: 'menu',
			cls: 'vertical',
			include: 'selectable',
			defaultItem: {
				$content: {
					include: 'before-icon',
					$label: {
						etype: 'label',
						cls: 'small teal float-right',
						hidden: true
					}
				},
				onClick: function() {
					this.events.rise('select');
				},
				set: {
					'icon': function(v) {
						this.$content.opt('icon', v);
					},
					'label': function(v) {
						this.$content.$label.opt('text', v);
						this.$content.$label.opt('hidden', !v);
					}
				}
			},
			items: [
				{text: 'Dashboard', icon: 'fa-dashboard'}, 
				{text: 'Mail', icon: 'fa-envelope'}, 
				{text: 'Tasks', icon: 'fa-tasks', label: '3'}, 
				{text: 'Reports', icon: 'fa-pie-chart'}
			],
			set: {
				'index': function(v) {
					this.selection.set(v);
				}
			}
		}
	},
	$content: {
		cls: 'content box padding',
		items: [LOREMIPSUM, LOREMIPSUM_2]
	}
});


box.render('#sample');

box.$sidebar.$menu.opt('index', 0);