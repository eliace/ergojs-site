



var w = $.ergo({
	etype: 'box',

	as: 'button',

	include: ['dropdown'],

	onClick: function(e) {
		this.toggle('opened');
		e.stop();
	},

	onClickItem: function() {
		this.unset('opened');
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
			layout: 'contents',
			$header: {
				as: 'header',
				include: ['icon'],
				icon: 'fa-globe before',
				text: 'Группа 1',
				weight: -1
			},
			defaultItem: {
				as: 'item',
				onClick: 'action:clickItem'
			},
			items: ['Испания', 'Германия', 'Франция'],
		}/*, {
			etype: 'box',
			cls: 'divider'
		}*/, {
			etype: 'list',
			layout: 'contents',
			$header: {
				as: 'header',
				include: ['icon'],
				icon: 'fa-globe before',
				text: 'Группа 2',
				weight: -1
			},
			defaultItem: {
				as: 'item',
				onClick: 'action:clickItem'
			},
			items: ['Россия', 'Украина', 'Казахстан'],
		}]
	}


});


w.render('#sample');
