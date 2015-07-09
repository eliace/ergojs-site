

var w2 = $.ergo({
	etype: 'panel',
	cls: 'box bordered divided padded',
	title: 'Pagination',
	renderTo: '#sample',
	data: new PageCollection(),
	$header: {
		// $title: {
		// 	state: 'tiny'
		// },
		$toolbar: {
			etype: 'box',
			items: [{
				etype: 'grid-pagination',
//				state: 'tiny'
			}]			
		}		
	},
	$content: {
		cls: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		$toolbar: {
			etype: 'box',
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