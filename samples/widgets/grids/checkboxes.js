


JsonAjaxProvider = {
	url: 'data/grid-30.json',
	findAll: function(source, query) {
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
						onChange: function() {
							this.rise('checkAll', {value: this.opt('value')}); 
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
							onChange: function() {
								this.rise('checkOne', {value: this.opt('value')}); 
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
					this.rise('checkAll', {value: this.opt('value')}); 
				}
			}
		},
		width: 40,
		$content: {
			etype: 'check',
			autoBind: false,
			onAction: function() {
				this.rise('checkOne', {value: this.opt('value')}); 
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
		
		
		console.log(checked, this.rows().count());		
		
		if(checked == 0)
			checker.states.unset('indeterminate');
		else if(checked < this.rows().count())
			checker.states.set('indeterminate');
		else {
			checker.opt('value', true);			
			checker.states.unset('indeterminate');
		}
			
	}
});


w.render('#sample');

data.fetch();
