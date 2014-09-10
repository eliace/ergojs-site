


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
	}, {
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
			row.item(0).content.opt('value', e.value);
		});
	},
	onCheckOne: function(e) {
		var checked = 0;
		this.rows().each(function(row) {
			if(row.item(0).content.opt('value')) checked++;
		});
		if(checked == 0)
			this.headers().get(0).content.opt('indeterminate', false);
		else if(checked < this.rows().count())
			this.headers().get(0).content.opt('indeterminate', true);
		else {
			this.headers().get(0).content.opt('value', true);			
			this.headers().get(0).content.opt('indeterminate', false);
		}
			
	}
});


w.$render('#sample');

data.fetch();
