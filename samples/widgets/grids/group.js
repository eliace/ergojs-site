

JsonAjaxProvider = {
	url: 'data/mock-30.json',
	findAll: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};


/*
var data = new Ergo.data.Collection({provider: JsonAjaxProvider, parser: function(v){
	
	var groups = {};
	
	for(var i = 0; i < v.length; i++) {
		var obj = v[i];
		var g = groups[obj.group];
		if(!g) {
			g = groups[obj.group] = {title: obj.group, content: []};
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
	
	return result;
}});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'link',
				cls: 'column-text',
				components: {
					caret: {
						etype: 'html:span',
						cls: 'caret'
					},
					content: {
						etype: 'text'
					}
				}
			}
		},
		autoBind: false
	},
	$content_$content_$body: {
		layout: {
			etype: 'table',
			columns: [{}, {}, {}, {}]
		},
		defaultItem: {
			etype: 'box',
			layout: 'inherited',
			autoRender: false,
			$group: {
				etype: 'table-row',
				cls: 'group',
				weight: -100,
				items: [{
					dataId: 'title',
					binding: 'text'
				}],
				binding: function(v) {
					this.opt('group', v.title);
				}
			},
			$summary: {
				etype: 'table-row',
				weight: 100,
				cls: 'summary',
				items: [{
//					format: '(%s Users)',
//					text: 'Summary'
					binding: function(v) {
						this.opt('text', '('+v.content.length+' Users)');
					}
				}, {}, {}, {}],
				binding: function(v) {
					this.opt('group', v.title);
				}
			},
			$content: {
				dataId: 'content',
				autoRender: false,
				dynamic: true,
				layout: 'inherited',
				defaultItem: {
					etype: 'table-row',
					group: true,
					items: [{
						dataId: 'full_name',
						binding: 'text'
					}, {
						dataId: 'email',
						binding: 'text'
					}, {
						dataId: 'country',
						binding: 'text'
					}, {
						dataId: 'ip_address',
						binding: 'text'
					}],
					binding: function(v) {
						this.opt('group', v.group);
					}
				}
			}			
		}
	},
	columns: [{
		header: 'Full Name',
		// dataId: 'full_name',
		// binding: 'text',
	}, {
		header: 'Email',
		// dataId: 'email',
		// binding: 'text'
	}, {
		header: 'Country',
		// dataId: 'country',
		// binding: 'text'
	}, {
		header: 'IP Address',
		// dataId: 'ip_address',
		// binding: 'text'
	}],
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});

*/





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
	cls: 'widget',
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
			// dynamic: true,
			// layout: 'inherited',
			// autoRender: false,
			dataId: 'rows',
			defaultItem: {
				// etype: 'table-row',
// //				group: true,
				// items: [{
					// dataId: 'full_name',
					// binding: 'text'
				// }, {
					// dataId: 'email',
					// binding: 'text'
				// }, {
					// dataId: 'country',
					// binding: 'text'
				// }, {
					// dataId: 'ip_address',
					// binding: 'text'
				// }],
				binding: function(v) {
					this.opt('group', v.group);
				}
			}
		}
		
		
/*		
		$groups: {
			data: data.groups,
			autoRender: false,
			dynamic: true,
			layout: 'inherited',
			defaultItem: {
				etype: 'table-row',
				group: true,
				items: [{
					dataId: 'title',
					binding: 'text'
				}]
			}
		}
*/
/*		
		defaultItem: {
			etype: 'box',

			$rows: {
				dataId: 'content',
				autoRender: false,
				dynamic: true,
				layout: 'inherited',
				defaultItem: {
					etype: 'table-row',
					group: true,
					items: [{
						dataId: 'full_name',
						binding: 'text'
					}, {
						dataId: 'email',
						binding: 'text'
					}, {
						dataId: 'country',
						binding: 'text'
					}, {
						dataId: 'ip_address',
						binding: 'text'
					}],
					binding: function(v) {
						this.opt('group', v.group);
					}
				}
			}			
			
		}
*/		
//		dataId: 'rows',
		// dynamic: false,
		// $content: {
			// etype: 'box',
			// layout: 'inherited',
			// autoRender: false,
			// $rows: {
				// dataId: 'rows',
				// dynamic: true,
				// defaultItem: {
					// binding: function(v) {
						// this.opt('group', v.group);
					// }			
				// }				
			// }
// 			
		// }
/*		
		defaultItem: {
			etype: 'box',
			layout: 'inherited',
			autoRender: false,
			$group: {
				etype: 'table-row',
				cls: 'group',
				weight: -100,
				items: [{
					dataId: 'title',
					binding: 'text'
				}],
				binding: function(v) {
					this.opt('group', v.title);
				}
			},
			$summary: {
				etype: 'table-row',
				weight: 100,
				cls: 'summary',
				items: [{
//					format: '(%s Users)',
//					text: 'Summary'
					binding: function(v) {
						this.opt('text', '('+v.content.length+' Users)');
					}
				}, {}, {}, {}],
				binding: function(v) {
					this.opt('group', v.title);
				}
			},
			$content: {
				dataId: 'content',
				autoRender: false,
				dynamic: true,
				layout: 'inherited',
				defaultItem: {
					etype: 'table-row',
					group: true,
					items: [{
						dataId: 'full_name',
						binding: 'text'
					}, {
						dataId: 'email',
						binding: 'text'
					}, {
						dataId: 'country',
						binding: 'text'
					}, {
						dataId: 'ip_address',
						binding: 'text'
					}],
					binding: function(v) {
						this.opt('group', v.group);
					}
				}
			}			
		}
*/		
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
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});








w.render('#sample');

data.fetch();
