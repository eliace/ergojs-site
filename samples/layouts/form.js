

$.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	items: [{
		layout: 'form',
		
		defaultItem: {
//			mixins: ['label']
			// сами реализуем функционал примеси label
			$label: {
				etype: 'html:label',
				autoRender: false
			},
			set: {
				'label': function(v) { this.label.opt('text', v); }
			}
		},
		
		items: [{
			label: 'Фамилия',
			etype: 'text-box'
		}, {
			label: 'Имя',
			etype: 'text-box'
		}, {
			label: 'Отчество',
			etype: 'text-box'
		}]
		
	}]
	
});





$.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	items: [{
		layout: 'band',
		
		defaultItem: {
			mixins: ['label']
		},
		
		items: [{
			label: 'Фамилия',
			etype: 'text-box'
		}, {
			label: 'Имя',
			etype: 'text-box'
		}, {
			label: 'Отчество',
			etype: 'text-box'
		}]
		
	}]
	
});



