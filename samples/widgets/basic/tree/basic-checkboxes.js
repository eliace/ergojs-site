
// создаем провайдера тестовых данных дерева
TreeAjaxProvider = {
	url: 'data/tree',
	findAll: function(source, query) {
		var id = query.id || 0;
		return $.ajax(this.url+'/'+id+'.json', {
			data: query,
			dataType: 'json'
		});
	}
};


// создаем источник данных
var data = new Ergo.data.NodeList({provider: TreeAjaxProvider});



var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		binding: function(v) {
			if(this.data.opt('branch')) this.set('expandable');
			this.$icon.set(v.type);
		},
		$content: {
			dataId: 'title',
			binding: 'prop:text'
		},
		$checkbox: {
			etype: 'check',
			as: 'before',
			weight: -20,
			autoBind: false,
			onAction: function() {
//					this.events.
			}
		},
		$icon: {
			etype: 'icon',
			as: 'before',
			weight: -10,
			states: {
				// настраиваем FontAwesome-иконки для состояний
				'drive': 'cls:fa-hdd-o',
				'folder': 'cls:fa-folder-o',
				'clip': 'cls:fa-film'
			}
		}
	}
});


w.render('#sample');


data.fetch();
