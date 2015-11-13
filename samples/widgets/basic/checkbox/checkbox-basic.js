



var w = $.ergo({
//	etype: 'html:fieldset',
	etype: 'box',

	layout: 'vbox',

	include: 'selectable',

	selection: {
		multiselect: true		
	},

	as: '__gap',

	// $title: {
	// 	etype: 'html:legend',
	// 	text: 'Выбор страны'
	// },

	defaultItem: {
		etype: 'html:label',
		$check: {
			etype: 'check',
			as: 'before',
			weight: -10
		},
		$content: {
			etype: '.'
		},

		states: {
			'selected': function(on) {
				this.check.opt('value', on);
			}
		},

		onClick: function() {
			this.events.rise( this.states.is('selected') ? 'unselect' : 'select' );
		}
	},

	items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']

});


w.render('#sample');



/*

var w = $.ergo({
	etype: 'box',
	layout: 'grid',
	renderTo: '#sample',

	defaultItem: {
		etype: 'html:fieldset',

		layout: 'vbox',

		include: 'selectable',

		$title: {
			etype: 'html:legend',
			text: 'Выбор страны'
		},

		defaultItem: {
			style: {
				'display': 'block'
			}
		}

	},

	items: [{

		cls: '__gap',

		multiselect: true,

		defaultItem: {
			etype: 'html:label',
			$check: {
				etype: 'check',
				cls: 'before'
			},
			$content: {
				etype: '.',
				weight: 10
			},

			states: {
				'selected': function(on) {
					this.check.opt('value', on);
				}
			},

		// onChange: function() {
			// this.events.rise('select');
		// },

			onClick: function() {
				this.events.rise( this.states.is('selected') ? 'unselect' : 'select' );
			}

		},

		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']

	}, {

		defaultItem: {
			etype: 'html:label',
			$check: {
				etype: 'html:checkbox',
				cls: 'before'
			},
			$content: {
				etype: '.'
			}
		},

		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']

	}]


});

*/
