

var w = $.ergo({
	etype: 'box',
	layout: {
		etype: 'grid',
		pattern: [6, 6]
	},
	items: [{
		etype: 'basic-tree',
		data: data,
		nestedItem: {
			components: {
				content: {
					dataId: 'title'
				}
			},
			binding: function(v) {
				if(v.type != 'cities') this.states.set('expandable');
			}
		}
		
	}, {
		etype: 'basic-tree',
		data: data,
		nestedItem: {
			components: {
				// checker: {
					// etype: 'check',
					// weight: -20,
					// autoBind: false
				// },
				content: {
					$content: {
						etype: '&text',
						dataId: 'title'
					},
					$icon: {
						etype: 'icon',
						weight: -10,
						states: {
							// отображение состояния на класс иконки
							'cardinals': 'fa-globe',
							'countries': 'fa-flag',
							'cities': 'fa-building-o'
						}
					},
					binding: false
				},
				description: {
					// выведем дополнительную информацию
					etype: 'text',
					weight: 10,
					cls: 'desc',
					dataId: 'iso',
					format: function(v) { return v ? '('+v+')' : ''; }
				},
				// subtree: {
					// effects: {
						// easing: 'easeOutQuad'
					// }
				// }
			},
			binding: function(v) {
				// узлы с типом cities не должны раскрываться,
				// для них не будет устанавливаться состояние expandable, которое отображает toggler  
				if(v.type != 'cities') 
					this.states.set('expandable');
				// устанавливаем состояние иконки
				this.content.icon.states.set(v.type);
			}
		}
		
	}]
});

w.render('#sample');

