

var menu = $.ergo({
	etype: 'menu',
	include: 'selectable',
	cls: 'vertical left',
	width: 240,
	defaultItem: {
		etype: 'menu',
		layout: 'inherited',

		$header: {
			etype: 'html:li',
			cls: 'header'
		},

		defaultItem: {
			etype: 'menu-item',
			onClick: function() {
				this.events.rise('select');
			},
			$content: {
				$label: {
					etype: 'label',
					cls: 'float-right small teal',
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
		$header_text: 'User',
		items: [
			{ text: 'Profile' }
		]
	}, {
		$header_text: 'Actions',
		items: [
			{	text: 'Dashboard'	}, 
			{	text: 'Mail',	$content_label: '24' }, 
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
