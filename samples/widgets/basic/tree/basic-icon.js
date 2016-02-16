

var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		$content: {
			format: '#{title}',
			$icon: {
				etype: 'icon',
				as: 'before',
				weight: -10,
				states: {
					// отображение состояния на класс иконки
					'cardinals': 'cls:fa-globe',
					'countries': 'cls:fa-flag',
					'cities': 'cls:fa-building-o'
				},
				dataId: 'type',
				binding: 'icon'
			},
			$content: {
				etype: '.',
//				dataId: 'title'
			}
		},
		binding: function(v) {
			if(v.type != 'cities') this.states.set('expandable');
		}
	}

});

w.render('#sample');
