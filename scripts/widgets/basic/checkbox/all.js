

$context.section('Checkbox');
$context.section_begin('checkbox-basic');
$context.section_end('checkbox-basic');




var w = $.ergo({
//	etype: 'html:fieldset',
	etype: 'box',

	layout: 'vbox',

	include: 'selectable',

	multiselect: true,

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

$context.section('Radio');
$context.section_begin('checkbox-radio');
$context.section_end('checkbox-radio');




var w = $.ergo({
	etype: 'box',

	layout: 'vbox',

	include: 'selectable',

//	multiselect: true,

	as: '__gap',

	defaultItem: {
		etype: 'html:label',
		$check: {
			etype: 'radio',
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

		onClick: 'action:select'
	},

	items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа'],


	binding: function(v) {
		this.opt('selected', v);
	},

	value: 1

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

		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа'],
	},


	items: [{

		cls: '__gap',

		defaultItem: {
			etype: 'html:label',
			$radio: {
				etype: 'radio',
				cls: 'before'
			},
			$content: {
				etype: '.'
			},

			states: {
				'selected': function(on) {
					this.radio.opt('value', on);
				}
			},

			onClick: function() {
				this.events.rise('select');
			}


		},

		binding: function(v) {
			this.opt('selected', v);
		},

		value: 1


	}, {

		defaultItem: {
			etype: 'html:label',
			$radio: {
				etype: 'html:radio',
				controlName: 'my-radio',
				set: {
					'controlName': function(v) {
						this.el.attr('name', v);
					}
				}
			},
			$content: {
				etype: '.'
			},

			states: {
				'selected': function(on) {
					this.radio.opt('value', on);
				}
			},

			onChange: function(e) {
				this.events.rise('select');
			}

		},


		// onAction: function(e) {
			// this.opt('value', e.key);
		// },

		binding: function(v) {
			this.opt('selected', v);
		},

		value: 3

	}]




});
*/

$context.section('Switch');
$context.section_begin('checkbox-switch');
$context.section_end('checkbox-switch');


var cb1 = $.ergo({
	etype: 'box',
	as: 'switch',
	onClick: function() {
		this.states.toggle('checked');
	}
});



var cb2 = $.ergo({
	etype: 'html:label',
	text: 'Вариант №1',
	style: {'display': 'inline-block'},
	$toggle: {
		etype: 'box',
		as: 'switch before',
		events: {
			'change': function(e) {
				this.opt('value', e.value);
			},
			// действие пользователя
			'jquery:click': function() {
				this.events.rise('change', {value: !this.opt('value')});
			}
		},
		binding: function(v) {
			this.states.toggle('checked', !(!v));
		}
	},
	$content: {
		etype: '.'
	},
	states: {
		'selected': function(on) {
			this.$toggle.opt('value', on);
		}
	},
	onClick: function() {
		this.states.toggle('selected');
	}
});






var w = $.ergo({
	etype: 'box',
	layout: 'rows',
	as: '__gap',
	items: [ cb1, cb2 ]
});



w.render('#sample');

$context.section('Toggle');
$context.section_begin('checkbox-toggle');
$context.section_end('checkbox-toggle');



var w = $.ergo({
	etype: 'box',
	include: 'selectable item-click-selection',
	as: 'group buttons',
	defaultItem: {
		as: 'inactive rised'
	},
	items: [{
		etype: 'button',
		as: 'blue',
		text: 'ON'
	}, {
		etype: 'button',
		as: 'green',
		text: 'OFF'
	}],
	index: 0
});


w.render('#sample');



