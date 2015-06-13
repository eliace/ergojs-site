

$context.section('Ajax');
$context.section_begin('data-ajax');
$context.section_end('data-ajax');

// создаем провайдера тестовых данных дерева
treeAjaxProvider = {
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
var data = new Ergo.data.NodeList({provider: treeAjaxProvider});



var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		binding: function(v) {
			if(this.data.opt('branch')) this.states.set('expandable');
//			this.icon.states.set(v.type);
		},
		$content: {
			$icon: {
				etype: 'icon',
				cls: 'before',
				weight: -10,
				states: {
					// настраиваем FontAwesome-иконки для состояний
					'drive:type': 'fa-hdd-o',
					'folder:type': 'fa-folder-o',
					'clip:type': 'fa-film',
					'loading': 'spinner'
				},
				dataId: 'type'
				// binding: function(v) {
					// this.states.set(v);
				// }
			},
			$content: {
				etype: '&text',
				dataId: 'title'					
			},
			binding: false
		},
		onFetch: function() {
			this.$content.$icon.states.set('loading');
		},
		onFetched: function() {
			this.$content.$icon.states.unset('loading');
		}
	}
});


w.render('#sample');


data.fetch();
