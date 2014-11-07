


var data = [{
		title: 'Африка',
		type: 'cardinals',
		children: [{
			title: 'Египет',
			iso: 'EG',
			type: 'countries'
		}, {
			title: 'Марокко',
			iso: 'MA',
			type: 'countries'			
		}, {
			title: 'Кения',
			iso: 'KE',
			type: 'countries'						
		}, {
			title: 'Ангола',
			iso: 'AO',
			type: 'countries'						
		}]
	}, {
		title: 'Азия',
		type: 'cardinals',
		children: [{
			title: 'Китай',
			type: 'countries'						
		}, {
			title: 'Индия',
			type: 'countries'						
		}, {
			title: 'Иран',
			type: 'countries'						
		}, {
			title: 'Индонезия',
			type: 'countries'						
		}, {
			title: 'Ливия',
			type: 'countries'						
		}, {
			title: 'Непал',
			type: 'countries'						
		}]
	}, {
		title: 'Европа',
		type: 'cardinals',
		children: [{
			title: 'Великобритания',
			iso: 'GB',
			type: 'countries',
			children: [{
				title: 'Лондон',
				type: 'cities'
			}, {
				title: 'Бирмингем',
				type: 'cities'
			}, {
				title: 'Глазго',
				type: 'cities'
			}]
		}, {
			title: 'Германия',
			iso: 'DE',
			type: 'countries',
			children: [{
				title: 'Берлин',
				type: 'cities'
			}, {
				title: 'Гамбург',
				type: 'cities'
			}, {
				title: 'Мюнхен',
				type: 'cities'
			}]
		}, {
			title: 'Италия',
			iso: 'IT',
			type: 'countries',
			children: [{
				title: 'Рим',
				type: 'cities'
			}, {
				title: 'Милан',
				type: 'cities'
			}, {
				title: 'Неаполь',
				type: 'cities'
			}]
		}]
}];





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
						etype: 'text',
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
					etype: 'line',
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

w.$render('#sample');

