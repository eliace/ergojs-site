



var w = $.ergo({
	etype: 'box',

	as: 'button',

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
		as: 'hovered',
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
				as: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 1',
				weight: -1
			},
			defaultItem: {
				as: 'item',
				onClick: function() {
					this.rise('close');
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
				as: 'header',
				include: 'icon',
				icon: 'fa-globe before',
				text: 'Группа 2',
				weight: -1
			},
			defaultItem: {
				as: 'item',
				onClick: function() {
					this.rise('close');
				}
			},
			items: ['Россия', 'Украина', 'Казахстан'],
		}]
	}


});


w.render('#sample');
