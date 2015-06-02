

var w2 = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Pagination',
	renderTo: '#sample',
	data: new PageCollection(),
	$header: {
		$title: {
			state: 'tiny'
		},
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'grid-pagination',
				state: 'tiny'
			}]			
		}		
	},
	$content: {
		cls: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		autoRender: true,
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'grid-pagination'
			}]
		}
	},
	onChangeDataIndex: function(e) {
		this.opt('index', e.index);
	},
	set: {
		'index': function(index) {

			this.data.opt('index', index);
			
			this.data.fetch();
			
		}
	}
});


w2.opt('index', 12);