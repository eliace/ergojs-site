

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
		$filter: {
			cls: 'border-bottom',
			$content: {
				etype: 'input',
				cls: 'icon right',
				placeholder: 'Поиск...',
				$icon: {
					etype: 'icon',
					cls: 'fa-search right',
					weight: 10
				}
			}
		},
		defaultItem: {
			cls: 'item',
			onClick: 'action:close'
			// onClick: function() {
			// 	this.events.rise('close');
			// }
		},
		items: ['Испания', 'Германия', 'Франция', 'Италия', 'Великобритания', 'Греция']
	}


});


w.render('#sample');