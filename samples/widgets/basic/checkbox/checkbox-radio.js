



var w = $.ergo({
	etype: 'box',

	layout: 'vbox',
	
	include: 'selectable',
	
//	multiselect: true,

	cls: '__gap',

	defaultItem: {
		etype: 'html:label',
		$check: {
			etype: 'radio',
			cls: 'before',
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
			this.events.rise('select');				
		}		
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