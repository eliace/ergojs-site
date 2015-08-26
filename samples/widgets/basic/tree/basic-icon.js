

var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		$content: {
			format: '#{title}',
			$icon: {
				etype: 'icon',
				cls: 'before',
				weight: -10,
				states: {
					// отображение состояния на класс иконки
					'cardinals': 'fa-globe',
					'countries': 'fa-flag',
					'cities': 'fa-building-o'
				},
				dataId: 'type'
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
