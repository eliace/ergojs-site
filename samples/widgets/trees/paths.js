
var data = new Ergo.data.Collection({
	provider: {
		find_all: function() {
			return $.getJSON('data/tree-countries.json');
		}
	}
});



var w = $.ergo({
	etype: 'basic-tree',
	data: data,
	nestedItem: {
		$content: {
			dataId: 'title'
		},
		binding: function(v) {
			if(v.type != 'cities') this.states.set('expandable');
		},
		onItemExpanded: function() {
			this.parent.items.each(function(item) {
				if(item != this && item.states.is('expanded'))
					item.states.unset('expanded');
			}.bind(this));
		}
	}
});


w.render('#sample');

data.fetch();
