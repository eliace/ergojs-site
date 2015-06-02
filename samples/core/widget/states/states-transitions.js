
var t = $.ergo({
	etype: 'box',
	text: LOREMIPSUM,
	transitions: {
		// переход из любого состояния в 'large'
		'* > large': function() {
			this._font_size = this.el.css('font-size');				// запомним текущий размер шрифта
			return this.el.animate({'font-size': 20}, 600);
		},
		// переход из состояния 'large' в любое другое
		'large > *': function() {
			return this.el.animate({'font-size': this._font_size}, 600);
		}
	},
	states: {
		'red': function(on) {
			this.el.css({'color': (on ? 'red' : '')});
		}
	}
});



$.ergo({
	etype: 'button',
	renderTo: '#sample',
	text: 'Переключить состояние',
	onClick: function() {
		t.states.toggle('large')
			// свяжем переход к состоянию 'large' с изменением состояния 'red'
			.then(function(){
				t.states.toggle('red', t.states.is('large'));
			});
	}
});



t.render('#sample');
