

var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	as: 'vertical left',
	width: 240,
	defaultItem: {
		etype: 'menu',
		layout: 'inherited',

		$header: {
			etype: 'html:li',
			as: 'header',
			weight: -10
		},

		defaultItem: {
			etype: 'menu-item',
			onClick: 'action:select',
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
			get: {
				'name': function() {
					return this.opt('text');
				}
			}
		}
	},
	items: [{
		$header__text: 'User',
		items: [
			{ text: 'Profile' }
		]
	}, {
		$header__text: 'Actions',
		items: [
			{	text: 'Dashboard'	},
			{	text: 'Mail',	$content__label: '24' },
			{	text: 'Tasks'	}
		]
	}],
	selection: {
		lookup: function(v) {
			var found = null;
			this.items.each(function(item) {
				var f = item.item(v);
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

menu.opt('index', 'Profile');
