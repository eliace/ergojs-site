
// создаем провайдера тестовых данных дерева
TreeAjaxProvider = {
	url: 'data/tree',
	find_all: function(source, query) {
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
			if(this.data.opt('branch')) this.states.set('expandable');
			this.icon.states.set(v.type);
		},
		components: {
			content: {
				dataId: 'title'
			},
			checker: {
				etype: 'check',
				cls: 'before',
				weight: -20,
				autoBind: false,
				onAction: function() {
//					this.events.
				}
			},
			icon: {
				etype: 'icon',
				weight: -10,
				states: {
					// настраиваем FontAwesome-иконки для состояний
					'drive': 'fa-hdd-o',
					'folder': 'fa-folder-o',
					'clip': 'fa-film'
				}
			}
		}
	}
});


w.render('#sample');


data.fetch();
