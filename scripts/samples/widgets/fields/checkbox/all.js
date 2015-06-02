

$context.section('Checkbox');
$context.section_begin('checkbox-basic');
$context.section_end('checkbox-basic');







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






$context.section('Radio');
$context.section_begin('checkbox-radio');
$context.section_end('checkbox-radio');




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



