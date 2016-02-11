
var w = $.ergo({
	etype: 'table-grid',
	as: 'table grid box single-line celled',
	height: 300,
	column: {
		components: {
			content: {
				etype: 'text',
				as: 'column-text',
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
/*
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
					as: 'check-item',
					components: {
						addon: {
							etype: 'check',
							weight: -10,
							as: 'before',
							onChange: function(e) {
								this.rise(e.value ? 'showColumn': 'hideColumn', {key: this.parent._index});
							},
							onClick: function(e) {
								e.base.stopPropagation();
							}
						},
						content: {
							etype: '.'
						}

					}
				},
				items: ['ID', 'Full Name', 'Country', 'Email', 'Created At']
			}
		},
		// loader: {
			// $icon_cls: 'fa fa-spinner fa-spin fa-3x'
		// },
*/

		footer: {
			$content: {
				as: 'tools',
				items: [{
					etype: 'icon-button',
					icon: 'fa fa-fw fa-refresh',
					as: 'flat tool',
					onClick: function() {
						this.data.fetch();
					}
				}]
			}
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
