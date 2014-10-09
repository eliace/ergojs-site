

var data = [1,2,3,4,5];


var data = new Ergo.data.Collection({
	count: 50,
	index: 1
});


var w = $.ergo({
	etype: 'list',
	cls: 'pagination',
	mixins: ['selectable'],
	components: {
		nextBtn: {
			etype: 'html:li',
			weight: 100,
			$content: {
				etype: 'link',
				text: '»',
				binding: false
			}
		},
		prevBtn: {
			etype: 'html:li',
			weight: -100,
			$content: {
				etype: 'link',
				text: '«',
				binding: false
			}			
		}
	},
	defaultItem: {
		$content: {
			etype: 'link',
		},
		binding: false					
	},
	dynamic: true,
	data: data,
	binding: function(v) {
		
		
	},
	set: {
		'index': function(index) {
			
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
				this.items.add({text: i+1});
			
			if(min_block - min_float > 0)
				this.items.add({text: '...'});
			
			for(var i = min_block; i < max_block; i++)
				this.items.add({text: i+1});

			if(max_float - max_block > 0)
				this.items.add({text: '...'});
			
			// AFTER
			for(var i = max_float; i < count; i++)
				this.items.add({text: i+1});
			
			// for(var i = Math.max(index-wrap_pages-1, before_pages); i < Math.min(index+wrap_pages, count); i++)
				// this.items.add({text: i+1});
			
			// var i = 1;
			// if(index < after_pages + wrap_pages*2) {
				// for(; i <= index; i++)
					// this.items.add({text: i});
			// }
			
			this.$render();
			
		}
		
	}
});


w.$render('#sample');


w.opt('index', 44);
