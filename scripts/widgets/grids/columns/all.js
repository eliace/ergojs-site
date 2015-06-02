

ajaxProvider = {
	url: 'data/grid-30.json',
	find_all: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: ajaxProvider});



$context.section('Ширина');
$context.section_begin('columns-resize');
$context.section_end('columns-resize');


var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
	height: 300,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false,
		state: 'resizable'
		// events: {
			// 'jquery:mousemove': function(e) {
			// }
		// }
	},
	
	
	$content: {
		events: {
			'jquery:scroll': function(e) {
				
				this.parent.header.content.el.css('margin-left', -this.el.scrollLeft());
				
			}
		}
	},
	
	$header_$content: {
		$body: {
			defaultItem: {
				events: {
					'jquery:mousemove': function(e) {
						
						var el = $(e.target).parents('th').addBack().first();
						var cell = el.ergo();

		//				console.log(e.pageX, e.pageY);
						var x = e.pageX;
		//				var y = e.pageY;
						var offset = el.offset();
						var minX = offset.left;
						var maxX = offset.left + el.outerWidth();
						// var minY = offset.top;
						// var maxY = minY + this.el.outerHeight();

						
						
						var prev = cell.prev();
						
						if(x < minX+2 && prev && prev.states.is('resizable') ) {
							this.states.set('resize');
							this._resize_target = prev;					
						}
						else if(cell.states.is('resizable') && x > maxX-6) {
							this.states.set('resize');
							this._resize_target = cell;
						}
						else if(this.states.is('resize')) {
							this.states.unset('resize');
						}
		//					console.log(x, y);
						
						
					},
					'jquery:mousedown': function(e) {
						
						// это все должно быть в обрабттчике события startResize
						
						
						var gp = Ergo.context.open_glass_pane();
						
						gp.on('mouseup', function(e){

							// итоговая ширина
							var width = e.pageX + dx - min_x + handler.width();

							Ergo.context.close_glass_pane();
							$('.resize-handler').remove();
							this._resizing = false;
							
							
							var row_width = grid.header.el.outerWidth();
							
							grid.header.el.css('width', row_width);
							grid.content.el.css('width', row_width);

							// изменяем размер колонки
							grid.columns.resize(this._resize_target._index, width);
							
							width = 0;
							
							grid.columns.each(function(col){
								width += col.width;
							});
							
							grid.header.content.el.css('width', width);
							grid.content.content.el.css('width', width);
							
							
							
							
						}.bind(this));
						
						gp.on('mousemove', function(e) {
						
							if(this._resizing) {
								
	//							var max_x = min_x + this._resize_target.el.outerWidth() - handler.width();
								
	//							var handler = $('.resize-handler');
								
								var x = e.pageX+dx;
								x = Math.max(min_x, x);
								x = Math.min(max_x, x);
								
								if( x >= min_x && x <= max_x)
								handler.css({left: x});						
							}
							
						}.bind(this));
						
						
						
						var grid = this.parent.parent.parent.parent;
						
						var offset = grid.el.offset();
						
						var handler = $('<div class="resize-handler"/>');
						
						var min_x = this._resize_target.el.offset().left;
						var max_x = offset.left + grid.el.width() - handler.width();
						var left = this._resize_target.el.offset().left + this._resize_target.el.outerWidth() - handler.width();
						
						var dx = left - e.pageX;
						
						handler.css({left: left, top: offset.top});
						handler.height(grid.el.outerHeight());
						
						$('body').append(handler);
						
						this._resizing = true;
						
						e.preventDefault();
					}
				}			
			}
		}
	},
	
	columns: [{
		header: 'ID',
		dataId: 'User Id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name', 
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'text'
	}],
	data: data
});


w.render('#sample');

$context.section('Меню');
$context.section_begin('columns-menu');
$context.section_end('columns-menu');

var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
	height: 300,
	column: {
		cls: 'menu-header',
		components: {
			content: {
				etype: 'link',
				cls: 'column-text',
			},
			menu: {
				etype: 'dropdown-box',
				cls: 'column-dropdown',
				$content: {
					components: {
						caret: {
							etype: 'icon',
							state: 'fa-angle-down'						
						}
					}
				},
				$dropdown: {
					etype: 'dropdown-menu',
					renderTo: 'body',
					popup: {
						behaviour: 'global'
					},
					items: ['По возрастанию', 'По убыванию']
				}
			}
			
		},
		autoBind: false
	},
	columns: [{
		header: {
			text: 'ID',
		},
		dataId: 'User Id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name',
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'text'
	}],
	mixins: ['loader'],
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data
});


w.render('#sample');

$context.section('Включение/отключение');
$context.section_begin('columns-hide');
$context.section_end('columns-hide');

var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
	height: 300,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false,
// 		state: 'resizable',
// 		events: {
// 			'jquery:mousemove': function(e) {
// //				console.log(e.pageX, e.pageY);
// 				var x = e.pageX;
// //				var y = e.pageY;
// 				var offset = this.el.offset();
// 				var minX = offset.left;
// 				var maxX = offset.left + this.el.outerWidth();
// 				// var minY = offset.top;
// 				// var maxY = minY + this.el.outerHeight();
				
// 				var prev = this.prev();
				
// 				if((x < minX+2 && prev && prev.states.is('resizable') ) || (this.states.is('resizable') && x > maxX-6))
// 					this.parent.states.set('resize');
// 				else if(this.parent.states.is('resize'))
// 					this.parent.states.unset('resize');
// //					console.log(x, y);
// 			}
// 		}
 	},
	columns: [{
		header: 'ID',
		dataId: 'User Id',
		binding: 'text',
		width: 60
	}, {
		header: 'Full Name', 
		dataId: 'Full Name',
		binding: 'text',
	}, {
		header: 'Country',
		dataId: 'Country',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'Email',
		binding: 'text'
	}, {
		header: 'Created At',
		dataId: 'Created At',
		binding: 'text'
	}],
//	mixins: ['loader'],


	components: {
		header: {
			include: 'context-menu',
			onContextMenu: function(e) {
				var columns = this.parent.columns;
				for(var i = 0; i < columns.size(); i++) {
					var col = columns.get(i);
					this.contextMenu.item(i).addon.opt('value', !col.hidden);
				}
			},
			$contextMenu: {
				defaultItem: {
					cls: 'check-item',
					components: {
						addon: {
							etype: 'check',
							weight: -10,
							cls: 'before',
							onChange: function(e) {
								this.events.rise(e.value ? 'showColumn': 'hideColumn', {key: this.parent._index});
							},
							onClick: function(e) {
								e.base.stopPropagation();
							}
						},
						content: {
							etype: '&text'
						}
						
					}
				},
				items: ['ID', 'Full Name', 'Country', 'Email', 'Created At']
			}
		},
		// loader: {
			// $icon_cls: 'fa fa-spinner fa-spin fa-3x'
		// },
		
		
		footer: {
			etype: 'tool-bar',
			items: [{
				etype: 'icon-button',
				icon: 'fa fa-fw fa-refresh',
				state: 'flat tool',
				onClick: function() {
					this.data.fetch();
				}
			}]
		}		
	},	
	data: data,
	onHideColumn: function(e) {
		this.columns.hide(e.key);
	},
	onShowColumn: function(e) {
		this.columns.show(e.key);
	}
});


w.render('#sample');



data.fetch();