



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



Ergo.defineClass('Ergo.widgets.Alert', 'Ergo.widgets.Box', {
	
	defaults: {
		cls: 'alert',
		layout: 'column',
		components: {
			icon: {
				etype: 'icon'
			},
			content: {
				components: {
					title: {
						cls: 'alert-title',
						etype: 'html:strong'
					},
					message: {
						cls: 'alert-message',
						etype: 'box'
					}					
				}
			},
			xicon: {
				etype: 'icon',
				autoRender: false
			}
		}
	},
	
	
	setTitle: function(v) {
		this.content.title.opt('text', v);
	},
	
	setIcon: function(v) {
		this.icon.states.set(v);
	},
	
	setText: function(v) {
		this.content.message.opt('text', v);
	}
	
	
}, 'widgets:alert');



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



Ergo.defineClass('Ergo.widgets.DropdownList', 'Ergo.widgets.List', {
	
	defaults: {
		baseCls: 'dropdown-list',
		style: {'display': 'none'},
		mixins: ['popup'],
		shortcuts: {
			'|': {cls: 'divider'}
		}
	}
	
}, 'widgets:dropdown-list');



Ergo.defineClass('Ergo.widgets.DropdownMenu', 'Ergo.widgets.DropdownList', {
	
	defaults: {
		baseCls: 'dropdown-menu',
		defaultItem: {
			components: {
				content: {
					etype: 'link'
				}				
			},
			set: {
				'text': function(v) { this.content.opt('text', v); }
			}
		}
	}
	
}, 'widgets:dropdown-menu');



Ergo.defineClass('Ergo.widgets.GridPagination', 'Ergo.widgets.Box', {
	
	defaults: {
		baseCls: 'grid-pagination',
		defaultItem: {
			etype: 'text',
			autoBind: false
		},
		items: [{
			etype: 'button',
			text: '<<',
			onClick: function() {
				this.events.rise('first');
			}
		}, {
			etype: 'button',
			text: '<',
			onClick: function() {
				this.events.rise('previous');
			}
		}, 
		'Страница ', 
		{
			etype: 'field'
		}, 
		' из ', 
		{
			etype: 'text'
		}, {
			etype: 'button',
			text: '>',
			onClick: function() {
				this.events.rise('next');
			}
		}, {
			etype: 'button',
			text: '>>',
			onClick: function() {
				this.events.rise('last');
			}			
		}]
	},
	
	$construct: function(o) {
		this.$super(o);
		
		this._index = 0;
	}
	
	
}, 'widgets:grid-pagination');



Ergo.defineClass('Ergo.widgets.Button', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<button/>',
		cls: 'btn',
		state: 'default'
	}
	
}, 'widgets:button');






Ergo.defineClass('Ergo.widgets.Icon', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<i/>',
		cls: 'icon'
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





Ergo.defineClass('Ergo.widgets.Panel', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<div/>',
		cls: 'panel',
		components: {
			header: {
				html: '<header/>',
				weight: -10,
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
				weight: 10,
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
			html: '<td/>'
//			etype: 'html:td'
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





Ergo.defineClass('Ergo.widgets.NodeList', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<ul/>',
//		cls: 'tree',
		defaultItem: {
			etype: 'node'
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
	
	
}, 'widgets:node-list');	



Ergo.defineClass('Ergo.widgets.Node', 'Ergo.widgets.Box', {
	
	defaults: {
		
		html: '<li/>',
		
		transitions: {
			'* > expanded': function() { this.subtree.show(); },
			'expanded > *': function() { this.subtree.hide(); }
		},
		
		components: {
			// caret: {
				// etype: 'icon',
				// cls: 'caret',
				// weight: -10,
				// onClick: function() {
					// this.parent.states.toggle('expanded');
				// }
			// },
			content: {
				etype: 'text'
			},
			subtree: {
				etype: 'node-list',
				weight: 100
			}
		}
		
	},
	
	
	setText: function(v) {
		this.content.opt('text', v);
	}
	
	
	// getLeaf: function() {
		// return this.states.is('leaf');
	// },
// 	
	// setLeaf: function(v) {
		// this.states.toggle('leaf', v);
	// }
	
	
}, 'widgets:node');




Ergo.defineClass('Ergo.widgets.Tree', 'Ergo.widgets.NodeList', {
	
	defaults: {
		cls: 'tree'
		// node: {
			// etype: 'link'
		// }
	}


}, 'widgets:tree');




Ergo.defineClass('Ergo.widgets.Line', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<span/>',
		binding: 'text'
	}
	
}, 'widgets:line');



Ergo.defineClass('Ergo.widgets.Field', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<input type="text"/>',
		baseCls: 'field',
		binding: function(v) {
			this.el.val(v);
		}
	}
	
}, 'widgets:field');


Ergo.defineClass('Ergo.widgets.Check', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<input type="checkbox"/>',
		binding: function(v) {
				this.el.prop('checked', v);
//			this.states.toggle('checked');
//			v ? this.el.attr('checked', '') : this.el.removeAttr('checked');
		},
		events: {
			'jquery:change': function(e, w) {
				w.opt('value', w.el.prop('checked'));
				w.events.fire('action');
			}
		}
		// states: {
			// 'checked': function(on) {
				// this.el.prop('checked', on);
// //				on ? this.el.prop('checked', '') : this.el.removeAttr('checked');				
			// }
		// }
	},
	
	
	setIndeterminate: function(v) {
		this.el.prop('indeterminate', v);
	}
	
}, 'widgets:check');




Ergo.defineClass('Ergo.widgets.TabBar', 'Ergo.widgets.List', {
	
	defaults: {
		
		etype: 'list',
		cls: 'tabs',
		defaultItem: {
		}				
		
		
	}
	
	
}, 'widgets:tab-bar');


Ergo.defineClass('Ergo.widgets.ToolBar', 'Ergo.widgets.Box', {
	
	defaults: {
		baseCls: 'tool-bar',
	}
	
	
}, 'widgets:tool-bar');



Ergo.defineClass('Ergo.widgets.MenuBar', 'Ergo.widgets.List', {
	
	defaults: {		
		baseCls: 'menu-bar',
		defaultItem: {
			html: '<li/>',
			components: {
				content: {
					etype: 'link'					
				}
			},
			set: {
				'text': function(v) {this.content.opt('text', v);}
			}
		},
	}
	
	
}, 'widgets:menu-bar');


//= require "tab-bar"
//= require "tool-bar"
//= require "menu-bar"



Ergo.defineClass('Ergo.widgets.ButtonBox', 'Ergo.widgets.Box', {
	
	defaults: {
		cls: 'btn-box',
		defaultItem: {
			etype: 'button'
		}
	}
	
}, 'widgets:button-box');



Ergo.defineClass('Ergo.widgets.TextBox', 'Ergo.widgets.Box', {
	
	defaults: {
		baseCls: 'text-box',
		components: {
			content: {
				etype: 'html:input'
			}
		}
	}
	
}, 'widgets:text-box');


Ergo.defineClass('Ergo.widgets.CaretBox', 'Ergo.widgets.Box', {
	
	defaults: {
		components: {
			caret: {
				etype: 'html:span',
				cls: 'caret'
			}
		}
	}
	
}, 'widgets:caret-box');



Ergo.defineClass('Ergo.widgets.DropdownBox', 'Ergo.widgets.Box', {
	
	defaults: {
		mixins: ['dropdown'],
		components: {
			content: {
				etype: 'caret-box',
				cls: 'dropdown-toggle',
				// components: {
					// caret: {
						// etype: 'html:span',
						// cls: 'caret'						
					// }
				// },
				onClick: function(e) {
					this.parent.states.toggle('opened');
					e.baseEvent.stopPropagation();
					e.baseEvent.preventDefault();  //IE11
				}		
			},
			dropdown: {
				weight: 100,
				popup: {
					at: 'left bottom'
				},
				onClosed: function() {
					this.parent.states.unset('opened');
				}
			}
		}
		// states: {
			// 'opened': function(on) {
				// on ? this.dropdown.open() : this.dropdown.close();
			// }
		// }
	},
	
	
	setText: function(v) {
		this.content.opt('text', v);
	}
	
}, 'widgets:dropdown-box');





Ergo.defineClass('Ergo.widgets.LinkButton', 'Ergo.widgets.Link', {
	
	defaults: {
		cls: 'btn',
		state: 'default'
	}
	
}, 'widgets:link-button');


Ergo.defineClass('Ergo.widgets.IconButton', 'Ergo.widgets.Button', {
	
	defaults: {
		components: {
			icon: {
				etype: 'icon'			
			}
		},
		state: 'default'
	},
	
	
	setIcon: function(v) {
		this.icon.states.set(v);
	}
	
}, 'widgets:icon-button');


Ergo.defineClass('Ergo.widgets.ImageButton', 'Ergo.html.Img', {
	
	defaults: {
		cls: 'btn',
		state: 'default'
	}	
	
}, 'widgets:image-button');



Ergo.defineClass('Ergo.widgets.DropdownButton', 'Ergo.widgets.ButtonBox', {
	
	defaults: {
		baseCls: 'dropdown-button',
		components: {
			button: {
				etype: 'button',
				cls: 'dropdown-toggle',
				components: {
					caret: {
						etype: 'html:span',
						cls: 'caret'						
					}
				},
				onClick: function(e) {
		//			this.states.is('opened') ? 
					this.parent.states.toggle('opened');
					e.baseEvent.stopPropagation();
				}		
			},
			dropdown: {
				etype: 'dropdown-menu',
				weight: 100,
				popup: {
					at: 'left bottom'
				},
				onClosed: function() {
					this.parent.states.unset('opened');
				}
			}
		},
		states: {
			'opened': function(on) {
				on ? this.dropdown.open() : this.dropdown.close();
			}
		}
	},
	
	
	setText: function(v) {
		this.button.opt('text', v);
	}
	
}, 'widgets:dropdown-button');



Ergo.defineClass('Ergo.widgets.SplitButton', 'Ergo.widgets.DropdownButton', {
	
	defaults: {
		baseCls: 'split-button',
		components: {
			actionButton: {
				etype: 'button',
				weight: -10
			}
		}
	},
	
	setText: function(v) {
		this.actionButton.opt('text', v);
	}
	
	
}, 'widgets:split-button');








Ergo.defineClass('Ergo.widgets.TableGrid', 'Ergo.widgets.Box', {
	
	defaults: {
		cls: 'table-grid',
		components: {
			header: {
				cls: 'grid-header',
				components: {
					content: {
						etype: 'grid-header'
					}
				}
			},
			content: {
				cls: 'grid-content',
				autoHeight: true,
				components: {
					content: {
						etype: 'grid-box'				
					}
				}
			}
		}		
	},
	
	
	$layoutChanged: function() {
		this.$super();
		
//		console.log('grid layout changed');
		
		var hw = this.header.content.el.width();
		var cw = this.content.content.el.width();

//		console.log(hw);
//		console.log(cw);

		
		if(hw > cw) {
			this.header.el.css('padding-right', hw-cw);
		}
	},
	
	
	$construct: function(o) {
		this.$super(o);
		
		
//		var cols = [];
//		var control_items = [];
		
//		for(var i in o.columns) {
			// var col = Ergo.deep_copy(o.columns[i]);
// 			
			// if('width' in col) {
				// control_items.push({width: col.width});
				// delete col.width;
			// }
			// else {
				// control_items.push({});				
			// }
// 			
// 			
			// cols.push(col);
//		}
		
		// Ergo.smart_override(this.content.body.options.defaultItem, {items: cols});
// 		
// 		
		// for(var i in control_items) {
			// this.content.control.items.add(control_items[i]);
		// }
		
		
		var w = this;
		
		this.columns = {
			
			_widget: this,
			
			add: function(column, key) {
				
				var col_item = Ergo.deep_copy(column);
				var col = {};
				var hdr_item = {};
				
				if('width' in col_item) {
					col.width = col_item.width;
					delete col_item.width;
				}

				if('header' in col_item) {
					if($.isString(col_item.header)) {
						hdr_item.text = col_item.header;
					}
					else {
						hdr_item = col_item.header;
					}
					delete col_item.header;
				}

				
				this._widget.content.content.control.items.add(col);
				this._widget.content.content.body.options.defaultItem.items.push(col_item);

				this._widget.header.content.control.items.add(col);
				this._widget.header.content.body.item(0).items.add(Ergo.smart_override({}, this._widget.options.column, hdr_item));
			},
			
			
			size: function() {
				return this._widget.options.columns.length;
			},
			
			
			get: function(i) {
				return this._widget.options.columns[i];				
			},
			
			
			hide: function(i) {
				
				this._widget.header.content.control.item(i).el.detach();
				this._widget.header.content.body.item(0).item(i).el.detach();
				
				this._widget.content.content.control.item(i).el.detach();
				this._widget.content.content.body.items.each(function(row){
					row.item(i).el.detach();
				});
//				this._widget.content.content.control.options.items[i].autoRender = false;
				this._widget.content.content.body.options.defaultItem.items[i].autoRender = false;
				
				this.get(i).hidden = true;
			},
			
			show: function(i) {
				
				var w = this._widget.header.content.control.item(i);
				this._widget.header.content.control.layout.add( w, w._index, w._weight );//.item(i).el.detach();
				w = this._widget.header.content.body.item(0).item(i);
				this._widget.header.content.body.item(0).layout.add( w, w._index, w._weight );
				
				w = this._widget.content.content.control.item(i);
				this._widget.content.content.control.layout.add( w, w._index, w._weight );
				this._widget.content.content.body.items.each(function(row){
					var cell = row.item(i);
					row.layout.add(cell, cell._index, cell._weight);
				});
				delete this._widget.content.content.body.options.defaultItem.items[i].autoRender;

				this.get(i).hidden = false;
				
			}
			
			
			
		};
		
		
		
		for(var i in o.columns) {
			this.columns.add(o.columns[i]);
		}

		
		
		
	},
	
	
	rows: function() {
		return this.content.content.body.items;
	},
	
	headers: function() {
		return this.header.content.body.item(0).items;
	}
	
	
	
}, 'widgets:table-grid');






Ergo.defineClass('Ergo.widgets.grid.Header', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<table/>',
//		cls: 'grid-header',
		cls: 'grid-box header',
		components: {
			control: {
				html: '<colgroup/>',
				defaultItem: {
					etype: 'html:col'
				},
				weight: -1
			},
			body: {
				html: '<thead/>',
				defaultItem: {
					etype: 'table-row',
					defaultItem: {
						html: '<th/>'
//						etype: 'html:th'
					}
				},
				items: [{}]
			}
		}		
	}
	
}, 'widgets:grid-header');



Ergo.defineClass('Ergo.widgets.grid.Box', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<table/>',
		cls: 'grid-box',
		components: {
			control: {
				html: '<colgroup/>',
				defaultItem: {
					html: '<col/>'
				},
				weight: -1
			},
			body: {
				html: '<tbody/>',
				defaultItem: {
					etype: 'table-row',
					items: []
				},
				
				dynamic: true
			}
		}		
		
	}
	
}, 'widgets:grid-box');


//= require "table-grid"




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




//= require "tab-panel"





Ergo.defineClass('Ergo.widgets.BasicTree', 'Ergo.widgets.Tree', {
	
	defaults: {
		node: {
			
			transitions: {
				'* > expanded': function() {
					// загружаем данные поддерева и открываем его
					var self = this;
					if(this.data && this.data.fetch && !this.data._fetched)
						this.data.fetch().then(function(){ self.subtree.show(); });
					else if(!this.data._fetched)
						this.subtree.show();
				},
				'expanded > *': function() {
					// скрываем поддерево и удаляем его
					var self = this;
					this.subtree.hide().then(function(){
						if(self.data && self.data.purge) self.data.purge();
					});
				}
			},
			
			components: {
				toggler: {
					etype: 'box',
					cls: 'toggle',
					weight: -100,
					$content: {
						etype: 'html:span',
						cls: 'caret'
					},
					onClick: function() {
						this.parent.states.toggle('expanded');
					},
					states: {
						'opened:type:': 'se',
						'closed:type': ''
					}
				},
				content: {
					etype: 'link'
				}
			},
			states: {
				'expanded': function(on) {
					this.toggler.states.toggle('opened', on);
				}
			}
		}
	}
	
}, 'widgets:basic-tree');


Ergo.declare('Ergo.widgets.ListTree', 'Ergo.widgets.NodeList', {
	
	defaults: {
		cls: 'list-tree',
		
		node: {
			components: {
				content: {
					etype: 'link'
				}
			}
		}
	},
	
}, 'widgets:list-tree');	














//= require <widgets/basic/all>
//= require <widgets/bars/all>
//= require <widgets/boxes/all>
//= require <widgets/buttons/all>
//= require <widgets/dialogs/all>
//= require <widgets/editors/all>
//= require <widgets/grids/all>
//= require <widgets/panels/all>
//= require <widgets/pickers/all>
//= require <widgets/trees/all>
//= require <widgets/items/all>

//= require <widgets/accordion>
//= require <widgets/badge>
//= require <widgets/breadcrumb>
//= require <widgets/progress>
//= require <widgets/tooltip>

//= require "alert"
//= require "dropdown-list"
//= require "dropdown-menu"
//= require "grid-pagination"








