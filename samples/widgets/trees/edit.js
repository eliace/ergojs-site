

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




$.ergo({
	etype: 'panel',
	data: data,
	renderTo: '#sample',
	title: 'Страны',
	cls: 'widget default',
	$content: {
		cls: 'box-medium',
		$tree: {
			etype: 'basic-tree',
			include: 'selectable',
			nestedItem: {
				$content: {
					format: '#{title}',
					onClick: function() {
						// в качестве ключа используем путь к узлу
						this.events.rise('selectNode', {key: this.parent.path()});
					}
				},
				binding: function(v) {
					if(v.type != 'cities') this.states.set('expandable');
					// в качестве элемента пути используем title
					this.opt('name', v.title);
				}
			},
			lookup: function(key) {
				return this.find_path(key);
			},
			onSelectNode: function(e) {
				this.selection.set(e.key);
			}
		}
	}


});