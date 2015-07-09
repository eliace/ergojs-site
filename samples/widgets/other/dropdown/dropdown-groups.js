



var w = $.ergo({
	etype: 'box',

	cls: 'button',

	include: 'dropdown',

	onClick: function(e) {
		this.states.toggle('opened');
		e.stop();
	},

	onClose: function() {
		this.states.unset('opened');
	},

	$content: {
		etype: '.',
		text: 'Страны'
	},

	$dropdown: {
		cls: 'hovered',
		events: {
			'jquery:click': function(e) {
				return false;
			}
		},
		items: [{
			etype: 'list',
			layout: 'inherited',
			autoRender: false,
			$header: {
				cls: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 1'
			},
			defaultItem: {
				cls: 'item',
				onClick: function() {
					this.events.rise('close');
				}
			},
			items: ['Испания', 'Германия', 'Франция'],
		}/*, {
			etype: 'box',
			cls: 'divider'
		}*/, {
			etype: 'list',
			layout: 'inherited',
			autoRender: false,
			$header: {
				cls: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 2'
			},
			defaultItem: {
				cls: 'item',
				onClick: function() {
					this.events.rise('close');
				}
			},
			items: ['Россия', 'Украина', 'Казахстан'],
		}]
	}


});


w.render('#sample');