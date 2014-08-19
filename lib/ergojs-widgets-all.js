



Ergo.defineClass('Ergo.widgets.Box', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<div/>',
		defaultItem: {
			etype: 'box'
		},
		defaultComponent: {
			etype: 'box'
		}
	}
	
}, 'widgets:box');






Ergo.defineClass('Ergo.widgets.Icon', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<i/>'
	}
	
}, 'widgets:icon');




Ergo.defineClass('Ergo.widgets.Link', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<a href="#"/>',
		binding: 'text'
	},
	
	setHref: function(v) {
		this.el.attr('href', v);
	}
	
}, 'widgets:link');



Ergo.defineClass('Ergo.widgets.List', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<ul/>',
		dynamic: true,
		defaultItem: {
			etype: 'html:li',
			binding: 'text'
		}
	}
	
}, 'widgets:list');



Ergo.defineClass('Ergo.widgets.OrderedList', 'Ergo.widgets.List', {
	
	defaults: {
		html: '<ol/>'
	}
	
}, 'widgets:o-list');





Ergo.defineClass('Ergo.widgets.Panel', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<div/>',
		cls: 'panel',
		components: {
			header: {
				html: '<header/>',
				components: {
					title: {
						etype: 'html:h3',
						cls: 'panel-title'
					}
				}				
			},
			content: {
			},
			footer: {
				html: '<footer/>',
				autoRender: false
			}
		}
	},
	
	
	setTitle: function(v) {
		this.header.title.opt('text', v);
	}
	
}, 'widgets:panel');




Ergo.defineClass('Ergo.widgets.Table', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<table/>',
		components: {
			head: {
				etype: 'html:thead',
				defaultItem: {
					etype: 'table-row',
					defaultItem: {
						etype: 'html:th'
					}
				}
			},
			body: {
				etype: 'html:tbody',
				defaultItem: {
					etype: 'table-row'
				},
				dynamic: true
			}
		},
		row: {},
		cell: {}
	},
	
	
	$pre_construct: function(o) {

		if('columns' in o) {
			
			var hcols = [];
			var bcols = [];
			Ergo.each(o.columns, function(c){
				
				var col = {};
				
				if($.isString(c)) {
					col.header = c;
				}
				else {
					col = Ergo.deep_copy(c);
				}
				
				bcols.push(col);
				hcols.push(col.header);
				
				delete col.header;
			});
			
			Ergo.smart_override(o.components.head, {items: [{items: hcols}]});
			
			Ergo.smart_override(o.components.body, {defaultItem: o.row}, {defaultItem: {defaultItem: o.cell}}, {defaultItem: {items: bcols}});// items: [{items: hcols}]});
		}
		
		if('rows' in o) {

			Ergo.smart_override(o.components.body, {items: o.rows});
			
		}
		
		this.$super(o);
		
	}
	
	
	
}, 'widgets:table');





/*
Ergo.defineClass('Ergo.controllers.Columns', 'Ergo.core.Object', {
	
	
	initialize: function(widget) {
		this._widget = widget;
	},
	
	
	
	add: function(o) {
		// 1. добавляем опции в заголовок
		// 2. добавляем опции в строки
		// 3. добавляем ячейку в заголовок
		// 4. добавляем ячейку во все строки
	},
	
	
	get: function(i) {
		// получение чего-то 
	},
	
	
	remove_at: function(i) {
		
	}
	
	
	
});
*/




Ergo.defineClass('Ergo.widgets.TableRow', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<tr/>',
		defaultItem: {
			etype: 'html:td'
		}
	}
	
}, 'widgets:table-row');









/*
Ergo.defineClass('Ergo.widgets.Text', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<span/>',
		binding: 'text'
	}
	
}, 'widget:text');
*/


Ergo.defineClass('Ergo.widgets.Text', 'Ergo.core.Widget', {
	
	defaults: {
		binding: 'text'
	},
	
	setText: function(v) {
		this.el[0].textContent = v;
	}
	
}, 'widgets:text');





Ergo.declare('Ergo.widgets.Tree', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<ul/>',
		cls: 'tree',
		defaultItem: {
			etype: 'tree-node'
		},
		
		dynamic: true,
		
		node: {			
			components: {
				subtree: {
					hidden: true,
					dataId: 'children',
					dynamic: true,
					mixins: ['effects'],
					effects: {
						show: 'slideDown',
						hide: 'slideUp',
						delay: 400
					}
				}
			}
		}
	},
	
	$pre_construct: function(o) {
		this.$super(o);
		
		Ergo.smart_override(o.defaultItem, o.node, {components: {subtree: {node: o.node}}});
	}
	
	
}, 'widgets:tree');	



Ergo.declare('Ergo.widgets.TreeNode', 'Ergo.widgets.Box', {
	
	defaults: {
		
		html: '<li/>',
		cls: 'tree-node',
		
		transitions: {
			'* > expanded': function() { this.subtree.show(); },
			'expanded > *': function() { this.subtree.hide(); }
		},
		
		components: {
			icon: {
				etype: 'icon',
				weight: -10,
				onClick: function() {
					this.parent.states.toggle('expanded');
				}
			},
			content: {
				etype: 'text'
			},
			subtree: {
				etype: 'tree'
			}
		}
		
	},
	
	
	setText: function(v) {
		this.content.opt('text', v);
	},
	
	
	getLeaf: function() {
		return this.states.is('leaf');
	},
	
	setLeaf: function(v) {
		this.states.toggle('leaf', v);
	}
	
	
}, 'widgets:tree-node');










Ergo.defineClass('Ergo.widgets.TabBar', 'Ergo.widgets.List', {
	
	defaults: {
		
		etype: 'list',
		cls: 'tabs',
		defaultItem: {
		}				
		
		
	}
	
	
}, 'widgets:tab-bar');











Ergo.defineClass('Ergo.widgets.TabPanel', 'Ergo.widgets.Panel', {
	
	defaults: {
		
		cls: 'tab-panel',
		
		mixins: ['selection'],
		
		components: {
			header: {
				autoRender: false
			},
			tabbar: {
				weight: -5,
				etype: 'tab-bar',
				defaultItem: {
					mixins: ['selectable']
				}
			},
			content: {
				mixins: ['stack']
			}
		},
		
		onSelected: function(e) {
			this.content.opt('visible', e.target._index);
		}
		
	},
	
	
	
	$construct: function(o) {
		this.$super(o);
		
		this.tabs = new Ergo.core.Tabs(this);
		
		if('tabs' in o) {
			for(var i = 0; i < o.tabs.length; i++)
				this.tabs.add(o.tabs[i]);
		}
		
		
	}
	

	
}, 'widgets:tab-panel');







Ergo.defineClass('Ergo.core.Tabs', 'Ergo.core.Object', {
	
	defaults: {
		mixins: [Ergo.Observable]
	},
	
	
	initialize: function(w, o) {
		this.$super(o);
		
		this._widget = w;
	},
	
	
	
	add: function(o) {

		var page = {};
		var tab = {};
		
		if($.isString(o)) {
			tab = o;
		}
		else {
			page = Ergo.deep_copy(o);
			tab = o.tab;
			delete page.tab;
		}
		
		this._widget.tabbar.items.add(tab);
		this._widget.content.items.add(page);
		
	}
	
});

























