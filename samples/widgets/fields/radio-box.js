

var w = $.ergo({
	etype: 'box',
	layout: 'grid',
	renderTo: '#sample',
	
	defaultItem: {

		etype: 'html:fieldset',
		
		layout: 'stack',
		
		$title: {
			etype: 'html:legend',
			text: 'Выбор страны'
		},
		
		mixins: ['selectable'],
		
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа'],
	},
	
	
	items: [{
		
		defaultItem: {
			etype: 'html:label',
			$radio: {
				etype: 'radio',				
			},
			$content: {
				etype: '&text'
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
				etype: '&text'
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
