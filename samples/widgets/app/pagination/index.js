
var PageCollection = Ergo.data.PagedCollection.extend({
	
	defaults: {
		provider: {
			find_all: function(query) {
				var o = this.options;
				return $.when({total: 1000, from: query.from, to: query.to/*(o.index-1)*o.pageSize, to: o.index*o.pageSize*/, data: []});
			}
		},
		parser: function(v) {
			this.options.totalCount = v.total;
			this.options.from = v.from; 
			this.options.to = v.to; 
			
	//		console.log(v);
			
			return v.data;
		},
		
	}
	
});


var data = new PageCollection();



$context.section('Pagination');
//= require pagination-1
$context.section('Pagination');
//= require pagination-2


