




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
		
		defaultItem: {
			style: {
				'display': 'block'
			}
		}
		
	},
	
	items: [{
		

		defaultItem: {
			etype: 'box',
			$check: {
				etype: 'check',
				cls: 'before'
			},
			$content: {
				etype: 'text',
				weight: 10
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
				etype: 'text'
			}
		},
		
		items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']		
		
	}]
	
	
});





