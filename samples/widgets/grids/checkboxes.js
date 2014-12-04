


JsonAjaxProvider = {
	url: 'data/grid-30.json',
	find_all: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider});





var w = $.ergo({
	etype: 'table-grid',
	cls: 'widget',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false
	},
	
	$header_$content: {
		$control: {
			$checkcol: {
				weight: -100,
				etype: 'html:col',
				width: 40
			}
		},
		$body: {
			defaultItem: {
				$checkcol: {
					etype: 'html:th',
					weight: -100,
					autoBind: false,
					$content: {
						etype: 'check',
						onAction: function() {
							this.events.rise('checkAll', {value: this.opt('value')}); 
						}
					}
				}
			}			
		}
	},

	$content_$content: {
		$control: {
			$checkcol: {
				weight: -100,
				etype: 'html:col',
				width: 40
			}
		},
		$body: {
			$rows: {
				defaultItem: {
					$checkcol: {
						etype: 'html:td',
						weight: -100,
						$content: {
							etype: 'check',
							autoBind: false,
							onAction: function() {
								this.events.rise('checkOne', {value: this.opt('value')}); 
							}
						}
					}
				}
			}
		}
	},
	
	columns: [/*{
		header: {
			$content: {
				etype: 'check',
				onAction: function() {
					this.events.rise('checkAll', {value: this.opt('value')}); 
				}
			}
		},
		width: 40,
		$content: {
			etype: 'check',
			autoBind: false,
			onAction: function() {
				this.events.rise('checkOne', {value: this.opt('value')}); 
			}
		}
	},*/ {
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
	$loader_$icon_cls: 'fa fa-spinner fa-spin fa-3x',
	data: data,
	onCheckAll: function(e) {
		this.rows().each(function(row) {
			row.checkcol.content.opt('value', e.value);
		});
	},
	onCheckOne: function(e) {
		var checked = 0;
		this.rows().each(function(row) {
			if(row.checkcol.content.opt('value')) checked++;
		});
		var checker = this.header.content.body.item(0).checkcol.content;
		if(checked == 0)
			checker.opt('indeterminate', false);
		else if(checked < this.rows().count())
			checker.opt('indeterminate', true);
		else {
			checker.opt('value', true);			
			checker.opt('indeterminate', false);
		}
			
	}
});


w.render('#sample');

data.fetch();
