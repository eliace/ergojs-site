


JsonAjaxProvider = {
	get: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/grid-30.json'});



var w = $.ergo({
	etype: 'table-grid',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'line',
				cls: 'column-text',
			}
		},
		autoBind: false,
		set: {
			'text': function(v) {this.content.opt('text', v);}
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
	mixins: ['loader'],
	components: {
		header: {
			mixins: ['context-menu'],
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
							onAction: function() {
								this.events.rise(this.opt('value') ? 'showColumn': 'hideColumn', {key: this.parent._index});
							},
							onClick: function(e) {
								e.baseEvent.stopPropagation();
							}
						},
						content: {
							etype: 'text'
						}
						
					},
					set: {
						'text': function(v) {this.content.opt('text', v);}
					}
				},
				items: ['ID', 'Full Name', 'Country', 'Email', 'Created At']
			}
		},
		loader: {
			$icon_cls: 'fa fa-spinner fa-spin fa-3x'
		},
		footer: {
			etype: 'tool-bar',
			items: [{
				etype: 'icon-button',
				$icon_cls: 'fa fa-fw fa-refresh',
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


w.$render('#sample');

data.fetch();
