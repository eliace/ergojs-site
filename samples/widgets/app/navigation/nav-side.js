
var box = $.ergo({
	etype: 'box',
	as: 'has-sidebar at-left',
	$sidebar: {
		etype: 'html:aside',
		as: 'sidebar',
		$header: {
			etype: 'html:h3',
			text: 'M',
			as: 'title'
		},
		$menu: {
			etype: 'menu',
			as: 'vertical',
			include: 'selectable',
			onClick: 'action:select',
			defaultItem: {
				$content: {
					include: 'icon:before',
					$content: {
						etype: '.'
					},
					$label: {
						etype: 'label',
						as: 'small teal float-right',
						hidden: true
					}
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
		as: 'content box padding',
		items: [LOREMIPSUM, LOREMIPSUM_2]
	}
});


box.render('#sample');

box.$sidebar.$menu.opt('index', 0);
