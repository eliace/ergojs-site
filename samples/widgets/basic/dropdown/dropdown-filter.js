

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
		$filter: {
			as: 'border-bottom',
			$content: {
				etype: 'input',
				as: 'icon right',
				placeholder: 'Поиск...',
				$icon: {
					etype: 'icon',
					as: 'fa-search right',
					weight: 10
				}
			}
		},
		defaultItem: {
			as: 'item',
			onClick: 'action:close'
			// onClick: function() {
			// 	this.events.rise('close');
			// }
		},
		items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
	}


});


w.render('#sample');
