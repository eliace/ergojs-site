
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
			defaultItem: {
				onClick: 'action:menuItem',
				$content: {
					include: 'icon:before',
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
						this.$content.$label.opt({text: v, hidden: !v});
						// this.$content.$label.opt('text', v);
						// this.$content.$label.opt('hidden', !v);
					}
				}
			},
			items: [
				{text: 'Dashboard', icon: 'fa-dashboard'},
				{text: 'Mail', icon: 'fa-envelope'},
				{text: 'Tasks', icon: 'fa-tasks', label: '3'},
				{text: 'Reports', icon: 'fa-pie-chart'}
			],
			// set: {
			// 	'index': function(v) {
			// 		this.selection.set(v);
			// 	}
			// },
		}
	},
	$content: {
		include: 'pageable',
		as: 'content box padding',
		items: [LOREMIPSUM, LOREMIPSUM_2, LOREMIPSUM_3, LOREMIPSUM_4]
	},
	onMenuItem: function(e) {
		var k = e.target.prop('name');
		this.$sidebar.$menu.prop('selected', k);
		this.$content.prop('active', k);
//				this.prop('index', e.target.prop('name'));
	}
});


box.render('#sample');

box.emit('menuItem', {target: box.$sidebar.$menu.items.first()});
