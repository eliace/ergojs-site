

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
