


JsonAjaxProvider = {
	url: 'data/mock-30.json',
	find_all: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};





var data = new Ergo.data.Collection({provider: JsonAjaxProvider, parser: function(v){
	
	var groups = {};
	
	for(var i = 0; i < v.length; i++) {
		var obj = v[i];
		var g = groups[obj.group];
		if(!g) {
			g = groups[obj.group] = {title: obj.group, content: [], summary: {}};
		}
//		if(g.content.length == 0)
		g.content.push(obj);
	}
	
	var result = [];
	for(var i in groups) {
		result.push(groups[i]);
	}
	
	result.sort(function(a, b){
		if(a.title > b.title) return -1;
		else if(a.title < b.title) return 1;
		return 0;
	});
	
	return {
		rows: v,
		groups: result
	};
}});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'table grid box single-line celled',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'link',
				cls: 'column-text'
			}
		},
		autoBind: false,
	},
	$content_$content_$body: {
		layout: {
			etype: 'table',
			columns: [{}, {}, {}, {}]
		},
		
//		dynamic: false,
		
		$groups: {
			dynamic: true,
			layout: 'inherited',
			autoRender: false,
			dataId: 'groups',
			defaultItem: {
				etype: 'table-row',
				weight: -100,
				cls: 'group',
				items: [{
					dataId: 'title',
					binding: 'text'
				}],
				binding: function(v) {
					this.opt('group', v.title);
				}
			}
		},
		
		$summary: {
			dynamic: true,
			layout: 'inherited',
			autoRender: false,
			dataId: 'groups',
			defaultItem: {
				etype: 'table-row',
				cls: 'summary',
				weight: 100,
				items: [{
					binding: function(v) {
						this.opt('text', '('+v.content.length+' Users)');
					} 
				}, {}, {}, {}],
				binding: function(v) {
					this.opt('group', v.title);
				}
			}			
		},
		
		$rows: {
			dataId: 'rows',
			defaultItem: {
				binding: function(v) {
					this.opt('group', v.group);
				}
			}
		}
		
		
	},
	columns: [{
		header: 'Full Name',
		dataId: 'full_name',
		binding: 'text',
	}, {
		header: 'Email',
		dataId: 'email',
		binding: 'text'
	}, {
		header: 'Country',
		dataId: 'country',
		binding: 'text'
	}, {
		header: 'IP Address',
		dataId: 'ip_address',
		binding: 'text'
	}],
	// mixins: ['loader'],
	// $loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});








w.render('#sample');

data.fetch();
