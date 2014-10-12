



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
		mixins: ['popup', 'effects'],
		shortcuts: {
			'|': {cls: 'divider'}
		},
		effects: {
			show: {type: 'slideDown', delay: 200}				
		},
		states: {
			'dropdown:type': 'dropdown',
			'dropup:type': 'dropup'
		},
		type: 'dropdown'
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
			}
		}
	}
	
}, 'widgets:dropdown-menu');



Ergo.defineClass('Ergo.widgets.Pagination', 'Ergo.widgets.List', {
	
	defaults: {
		
		cls: 'pagination',
		mixins: ['selectable'],
		dynamic: false,  // отключаем динамическое построение элементов
		components: {
			nextBtn: {
				etype: 'html:li',
				weight: 100,
				$content: {
					etype: 'link',
					text: '»',
					binding: false,
					events: {
						'jquery:mousedown': function(e) {
							this.events.rise('nextIndex');
							e.preventDefault(); // блокируем выделение текста
						}
					}
				}
			},
			prevBtn: {
				etype: 'html:li',
				weight: -100,
				$content: {
					etype: 'link',
					text: '«',
					binding: false,
					events: {
						'jquery:mousedown': function(e) {
							this.events.rise('prevIndex');
							e.preventDefault(); // блокируем выделение текста
						}
					}
				}			
			}
		},
		defaultItem: {
			$content: {
				etype: 'link',
				events: {
					'jquery:mousedown': function(e) {
	//				this.parent.parent.opt('index', this.parent);
						var index = this.parent.opt('name');
						if(index)
							this.events.rise('changeIndex', {index: index});
						e.preventDefault(); // блокируем выделение текста
					}
				}
			},
			autoBind: false					
		},
//		dynamic: true,
		selectionFinder: function(key) {
			return this.item({_name: key});
		},
		onChangeIndex: function(e) {
			this.opt('index', e.index);
		},
		onNextIndex: function() {
			this.opt('index', this.opt('index')+1);
		},
		onPrevIndex: function() {
			this.opt('index', this.opt('index')-1);
		}
	},
	
	
	setIndex: function(index) {

		var count = this.data.opt('count');
		
		var before_pages = 2;
		var after_pages = 2;
		var wrap_pages = 2;
		
		this.items.apply_all('destroy');

		var min_float = Math.min(before_pages, count);
		var max_float = Math.max(before_pages, count-after_pages);
		var min_block = Math.max(min_float, index-wrap_pages-1);
		var max_block = Math.min(max_float, index+wrap_pages);
		
		// BEFORE
		for(var i = 0; i < min_float; i++)
			this.items.add({text: i+1, name: i+1});
		
		if(min_block - min_float > 0)
			this.items.add({text: '...'});
		
		for(var i = min_block; i < max_block; i++)
			this.items.add({text: i+1, name: i+1});

		if(max_float - max_block > 0)
			this.items.add({text: '...'});
		
		// AFTER
		for(var i = max_float; i < count; i++)
			this.items.add({text: i+1, name: i+1});
		
		this.$render();
		
		this.opt('selected', index);
		
//		data.opt('index', index);
//		data.fetch();
		
		this.events.fire('indexChanged', {index: index});
	}
	
	
	
}, 'widgets:pagination');



Ergo.defineClass('Ergo.widgets.GridPagination', 'Ergo.widgets.Box', {
	
	defaults: {
		baseCls: 'grid-pagination',
		defaultItem: {
			etype: 'text',
			autoBind: false
		},
		components: {
			firstButton: {
				etype: 'button',
				text: '«',
				weight: -100,
				onClick: function() {
					this.events.rise('first');
				}				
			},
			prevButton: {
				etype: 'button',
				text: '<',
				weight: -50,
				onClick: function() {
					this.events.rise('previous');
				}				
			},
			nextButton: {
				etype: 'button',
				text: '>',
				weight: 50,
				onClick: function() {
					this.events.rise('next');
				}				
			},
			lastButton: {
				etype: 'button',
				text: '»',
				weight: 100,
				onClick: function() {
					this.events.rise('last');
				}							
			}
		},
		items: [ 
		'Страница ', 
		{
			etype: 'field'
		}, 
		' из ', 
		{
			etype: 'text'
		}]
	},
	
	$construct: function(o) {
		this.$super(o);
		
		this._index = 0;
	}
	
	
}, 'widgets:grid-pagination');



Ergo.defineClass('Ergo.widgets.Navigation', 'Ergo.widgets.Box', {
	
	defaults: {
		baseCls: 'navigation',
		html: '<nav/>',
		components: {
			header: {
				layout: 'fluid',
				cls: 'header',
				components: {
					title: {
						etype: 'link',
						cls: 'title'
					}
				}
			},
			content: {
				layout: 'fluid',
				cls: 'content'
			}
		}
		
	},
	
	
	setTitle: function(v) {
		this.header.title.opt('text', v);
	}
	
	
}, 'widgets:navigation');


Ergo.defineClass('Ergo.widgets.Line', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<span/>',
		binding: 'text'
	}
	
}, 'widgets:line');



Ergo.defineClass('Ergo.widgets.Caret', 'Ergo.widgets.Line', {
	
	defaults: {
		cls: 'caret',
		autoBind: false
	}

}, 'widgets:caret');


Ergo.defineClass('Ergo.widgets.Button', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<button/>',
		cls: 'btn',
		type: 'default',
		states: {
			'default:type': 'default',
			'primary:type': 'primary',
			'success:type': 'success',
			'info:type': 'info',
			'warning:type': 'warning',
			'danger:type': 'danger',
			'tool:type': 'tool',
			
			'small:size': 'small',
			'large:size': 'large',
			'tiny:size': 'tiny',
			
			'outline': 'outline',
			'flat': 'flat',
			'line': 'line',

			'block': 'block',
			'round': 'round',
			
			'disabled': function(on) { on ? this.layout.el.prop('disabled', 'disabled') : this.layout.el.removeProp('disabled'); return false; }
		}
	}
	
}, 'widgets:button');






Ergo.defineClass('Ergo.widgets.Icon', 'Ergo.core.Widget', {
	
	defaults: {
		html: '<i/>',
		cls: 'icon',
		binding: 'text'
	},
	
	setIcon: function(v) {
		this.states.set(v);		
	},
	
	setText: function(v) {
		this.states.set(v);		
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
						etype: 'html:span',
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
			control: {
				html: '<colgroup/>',
				defaultItem: {
					etype: 'html:col'
				},
				weight: -10
			},
			head: {
				etype: 'html:thead',
				defaultItem: {
					etype: 'table-row',
					defaultItem: {
						etype: 'html:th'
					}
				},
				items: [{}],
				weight: -5,
			},
			body: {
				etype: 'html:tbody',
				defaultItem: {
					etype: 'table-row',
					items: []
				},
				dynamic: true
			}
		},
		row: {},
		cell: {}
	},
	



	
	$pre_construct: function(o) {

/*
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
*/		
		if('rows' in o) {

			Ergo.smart_override(o.components.body, {items: o.rows});
			
		}
		
		this.$super(o);
		
	},




	$construct: function(o) {
		this.$super(o);
		
		
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

				
				this._widget.control.items.add(col);
				this._widget.head.item(0).items.add(Ergo.smart_override({}, this._widget.options.column, hdr_item));
				this._widget.body.options.defaultItem.items.push(col_item);
			},
			
			
			size: function() {
				return this._widget.options.columns.length;
			},
			
			
			get: function(i) {
				return this._widget.options.columns[i];				
			},
			
			
			each: function(callback) {
				Ergo.each(this._widget.options.columns, callback);
			},
			
			
			hide: function(i) {
				
				this._widget.control.item(i).el.detach();
				this._widget.head.item(0).item(i).el.detach();
				this._widget.body.items.each(function(row){
					row.item(i).el.detach();
				});
//				this._widget.content.content.control.options.items[i].autoRender = false;
				this._widget.body.options.defaultItem.items[i].autoRender = false;
				
				this.get(i).hidden = true;
			},
			
			show: function(i) {
				
				var w = this._widget.control.item(i);
				this._widget.control.layout.add( w, w._index, w._weight );//.item(i).el.detach();
				w = this._widget.head.item(0).item(i);
				this._widget.head.item(0).layout.add( w, w._index, w._weight );
				
				this._widget.body.items.each(function(row){
					var cell = row.item(i);
					row.layout.add(cell, cell._index, cell._weight);
				});
				delete this._widget.body.options.defaultItem.items[i].autoRender;

				this.get(i).hidden = false;
				
			},
			
			
			resize: function(i, width) {
				
				var self = this;
				
				var headers = this._widget.headers();
				var control = this._widget.control;

				
				this.each(function(col, j){
					if(i == j) col.width = width;
					if(!col.width) {
						// фиксируем ширину плавающей колонки
//						col.width = hdr_control.item(j).el.width();
						col.width = headers.get(j).el.width();
//						console.log(col.width);
						control.item(j).el.width(col.width);
					}
				});
				
				
				control.item(i).el.width(width);
//				bdy_control.item(i).el.width(width);
				
				// var w = this._widget.header.content.control;//.item(i);
				// w.items.each(function(item){
				// });
				// w.el.width(width);
// 				
				// w = this._widget.content.content.control.item(i);
				// w.el.width(width);
				
			}
			
			
			
		};
		
		
		
		for(var i in o.columns) {
			this.columns.add(o.columns[i]);
		}

		
		
		
	},


	rows: function() {
		return this.body.items;
	},
	
	headers: function() {
		return this.head.item(0).items;
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
			// set: {
				// 'text': function(v) {
				// }
			// }
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





Ergo.defineClass('Ergo.widgets.NestedList', 'Ergo.widgets.Box', {
	
	defaults: {
		html: '<ul/>',
//		cls: 'tree',
		defaultItem: {
			etype: 'nested-item'
		},
		
		dynamic: true,
		
		nestedItem: {
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
		
		o.defaultItem = Ergo.smart_override({components: {subtree: {nestedItem: o.nestedItem}}}, o.nestedItem, o.defaultItem); //FIXME эмуляция обратной перегрузки
	},
	
	
	find: function(key) {
		
		var path = key.split(':');
		var w = this;
		var found = null;
		for(var i = 0; i < path.length; i++) {
			w = w.item({_name: path[i]});
			found = w;
			w = w.subtree;
		}
		
		return found;
	}
	
	
}, 'widgets:nested-list');	



Ergo.defineClass('Ergo.widgets.NestedItem', 'Ergo.widgets.Box', {
	
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
				etype: 'nested-list',
				weight: 100
			}
		}
		
	},
	
	
	path: function() {
		
    var path = [];
    var w = this;//.parent;
    while(w._name) {
      path.push(w._name);
      w = w.parent.parent;
    }
    
    return path.reverse().join(':');
	},
	
	
	
	
	// setText: function(v) {
		// this.content.opt('text', v);
	// }
	
	
	// getLeaf: function() {
		// return this.states.is('leaf');
	// },
// 	
	// setLeaf: function(v) {
		// this.states.toggle('leaf', v);
	// }
	
	
}, 'widgets:nested-item');




Ergo.defineClass('Ergo.widgets.Tree', 'Ergo.widgets.NestedList', {
	
	defaults: {
		cls: 'tree'
		// node: {
			// etype: 'link'
		// }
	}


}, 'widgets:tree');





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
		},
		states: {
			'default:type': 'default',
			'primary:type': 'primary',
			'success:type': 'success',
			'info:type': 'info',
			'warning:type': 'warning',
			'danger:type': 'danger',
			'tool:type': 'tool',
			
			'small:size': 'small',
			'large:size': 'large',
			'tiny:size': 'tiny',
			
			'outline': 'outline',
			'block': 'block',
			'round': 'round',
			'flat': 'flat'
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
			// content: {
				// etype: 'text'
			// },
			caret: {
				etype: 'html:span',
				cls: 'caret'
			}
		}
	},
	
	// setText: function(v) {
		// this.content.opt('text', v);
	// }
	
}, 'widgets:caret-box');



Ergo.defineClass('Ergo.widgets.DropdownBox', 'Ergo.widgets.Box', {
	
	defaults: {
		mixins: ['dropdown'],
		components: {
			content: {
				// здесь не должен использоваться caret-box
				cls: 'dropdown-toggle',
				components: {
					content: {
						etype: 'text'
					},
					caret: {
						etype: 'caret'
						// etype: 'html:span',
						// cls: 'caret'
					}
				},
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
		cls: 'icon-btn',
		components: {
			content: {
				etype: 'icon'			
			}
		}
	},
	
	
	setIcon: function(v) {
		this.content.states.set(v);
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
			content: {
				etype: 'button',
				cls: 'dropdown-toggle',
				components: {
					caret: {
						etype: 'caret',
						cls: 'after'
					}
				},
				onClick: function(e) {
		//			this.states.is('opened') ? 
					this.parent.states.toggle('opened');
					e.baseEvent.stopPropagation();
				}		
			},
			dropdown: {
				etype: 'dropdown-list',
				weight: 100,
				popup: {
					behaviour: 'none'
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
	}
	
	
	// setText: function(v) {
		// this.button.opt('text', v);
	// }
	
}, 'widgets:dropdown-button');



Ergo.defineClass('Ergo.widgets.SplitButton', 'Ergo.widgets.DropdownButton', {
	
	defaults: {
		baseCls: 'split-button',
		components: {
			actionButton: {
				etype: 'button',
				weight: -10
			},
			content: {
				components: {
					caret: {
						'-cls': 'after'
					}
				}
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
	


	$pre_construct: function(o) {
		this.$super(o);		
		
		// if(o.row)
			// Ergo.smart_override(o.components.content.components.content, {components: {body: {defaultItem: o.row}}});
		
	},


	
	$construct: function(o) {
		this.$super(o);
		
		
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
				this._widget.content.content.body.rows.options.defaultItem.items.push(col_item);

				this._widget.header.content.control.items.add(col);
				this._widget.header.content.body.item(0).items.add(Ergo.smart_override({}, this._widget.options.column, hdr_item));
			},
			
			
			size: function() {
				return this._widget.options.columns.length;
			},
			
			
			get: function(i) {
				return this._widget.options.columns[i];				
			},
			
			
			each: function(callback) {
				Ergo.each(this._widget.options.columns, callback);
			},
			
			
			hide: function(i) {
				
				this._widget.header.content.control.item(i).el.detach();
				this._widget.header.content.body.item(0).item(i).el.detach();
				
				this._widget.content.content.control.item(i).el.detach();
				this._widget.content.content.body.rows.items.each(function(row){
					row.item(i).el.detach();
				});
//				this._widget.content.content.control.options.items[i].autoRender = false;
				this._widget.content.content.body.rows.options.defaultItem.items[i].autoRender = false;
				
				this.get(i).hidden = true;
			},
			
			show: function(i) {
				
				var w = this._widget.header.content.control.item(i);
				this._widget.header.content.control.layout.add( w, w._index, w._weight );//.item(i).el.detach();
				w = this._widget.header.content.body.item(0).item(i);
				this._widget.header.content.body.item(0).layout.add( w, w._index, w._weight );
				
				w = this._widget.content.content.control.item(i);
				this._widget.content.content.control.layout.add( w, w._index, w._weight );
				this._widget.content.content.body.rows.items.each(function(row){
					var cell = row.item(i);
					row.layout.add(cell, cell._index, cell._weight);
				});
				delete this._widget.content.content.body.rows.options.defaultItem.items[i].autoRender;

				this.get(i).hidden = false;
				
			},
			
			
			resize: function(i, width) {
				
				var self = this;
				
				var headers = this._widget.headers();
				var hdr_control = this._widget.header.content.control;
				var bdy_control = this._widget.content.content.control;

				
				this.each(function(col, j){
					if(i == j) col.width = width;
					if(!col.width) {
						// фиксируем ширину плавающей колонки
//						col.width = hdr_control.item(j).el.width();
						col.width = headers.get(j).el.width();
						console.log(col.width);
						hdr_control.item(j).el.width(col.width);
						bdy_control.item(j).el.width(col.width);
					}
				});
				
				
				hdr_control.item(i).el.width(width);
				bdy_control.item(i).el.width(width);
				
				// var w = this._widget.header.content.control;//.item(i);
				// w.items.each(function(item){
				// });
				// w.el.width(width);
// 				
				// w = this._widget.content.content.control.item(i);
				// w.el.width(width);
				
			}
			
			
			
		};
		
		
		
		for(var i in o.columns) {
			this.columns.add(o.columns[i]);
		}

		
		
		
	},
	
	
	rows: function() {
		return this.content.content.body.rows.items;
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
				components: {
					rows: {
						autoRender: false,
						layout: 'inherited',
						dynamic: true,						
						defaultItem: {
							etype: 'table-row',
							items: []
						}						
					}
				}
			}
		}		
		
	}
	
}, 'widgets:grid-box');






Ergo.defineClass('Ergo.widgets.TabPanel', 'Ergo.widgets.Panel', {
	
	defaults: {
		
		cls: 'tab-panel',
		
		mixins: ['selectable'],
		
		components: {
			header: {
				autoRender: false
			},
			tabbar: {
				weight: -5,
				etype: 'tab-bar',
				defaultItem: {
					onClick: function() {
						this.events.rise('select', {key: this._name || this._index});
					}					
				}
			},
			content: {
				mixins: ['stackable'],
				// defaultItem: {
					// states: {
						// 'selected': function(on) {
							// if(on) {
								// this.parent.opt('visible', this);
							// }
						// }						
					// }
				// }
			}
		},
		
		// onSelectTab: function(e) {
			// this.opt('selected', e.key);
			// e.stop();
		// },
		
		selectionFinder: function(key) {
			return this.tabbar.item(key);//, this.content.item(key)];
		},
		
		onSelected: function(e) {
			this.content.opt('active', e.key);
			this.events.fire('selectTab', {key: e.key});
			e.stop();
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









Ergo.defineClass('Ergo.widgets.BasicTree', 'Ergo.widgets.Tree', {
	
	defaults: {
		nestedItem: {
			
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


Ergo.declare('Ergo.widgets.ListTree', 'Ergo.widgets.NestedList', {
	
	defaults: {
		cls: 'list-tree',
		
		nestedItem: {
			components: {
				content: {
					etype: 'link'
				}
			}
		}
	},
	
}, 'widgets:list-tree');	









Ergo.defineClass('Ergo.widgets.SideMenu', 'Ergo.widgets.NestedList', {
	
	defaults: {
		baseCls: 'side-menu',
		nestedItem: {
			components: {
				content: {
					etype: 'link',
					components: {
						icon: {
							etype: 'icon',
							cls: 'before',
							weight: -100
						},
						content: {
							etype: 'text',
						},
						caret: {
							etype: 'caret',
							state: 'closed',
							states: {
								'opened:g': 'down',
								'closed:g': 'right'
							},
							binding: function(v) {
								if(!v.children) this.hide();
							}
						}
					},
					binding: false,
					onClick: function() {
						
						if( !this.data.get('children') ) {
							this.events.rise('select', {key: this.parent.path()});
						}
						else {
							this.parent.states.toggle('expanded');							
						}
					}
				}				
			},
			states: {
				'expanded': function(on) {
					this.content.caret.states.set(on ? 'opened' : 'closed');
					if(on)
						this.events.rise('expandItem');
				}
			}
		},
		binding: function(v) {
			if(v.children) this.states.set('has-subtree');
		},
		
		// onExpandItem: function(e) {
			// // FIXME эксклюзивное открытие ветви
			// this.items.each(function(item){
				// if(e.target != item && item.states.is('expanded'))
					// item.states.unset('expanded');
			// });					
		// }
		
	}
	
	
	
}, 'widgets:side-menu');














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
//= require <widgets/menus/all>

//= require <widgets/accordion>
//= require <widgets/badge>
//= require <widgets/breadcrumb>
//= require <widgets/progress>
//= require <widgets/tooltip>

//= require "alert"
//= require "dropdown-list"
//= require "dropdown-menu"
//= require "pagination"
//= require "grid-pagination"
//= require "navigation"
//= require "caret"








