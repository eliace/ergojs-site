




var w = $.ergo({
	etype: 'box',
	layout: 'grid',
	renderTo: '#sample',
	
	defaultItem: {
		etype: 'html:fieldset',

		layout: 'stack',
		
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
		
		multiselect: true,

		defaultItem: {
			etype: 'html:label',
			$check: {
				etype: 'check',
				cls: 'before'
			},
			$content: {
				etype: '&text',
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
				etype: '&text'
			}
		},
		
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']		
		
	}]
	
	
});





