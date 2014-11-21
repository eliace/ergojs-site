



var w = $.ergo({
	etype: 'html:fieldset',
	renderTo: '#sample',
	
	$title: {
		etype: 'html:legend',
		text: 'Выбор страны'
	},
	
	defaultItem: {
		etype: 'html:label',
		$radio: {
			etype: 'field',
			type: 'checkbox',
			onChange: function() {
				this.events.rise('action', {key: this.parent.opt('key')});
			},
			binding: function(v) {
				this.el.prop('checked', v);
			}
		},
		$content: {
			etype: 'text'
		},
		style: {
			'display': 'block'
		},
		get: {
			'key': function() {
				return this._index;
			}
		},
		states: {
			'selected': function(on) {
				this.radio.opt('value', on);
			}
		}
	},
	
	items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
	
	
});
