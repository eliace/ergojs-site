

var w2 = $.ergo({
	etype: 'panel',
	as: 'box bordered divided padded',
	title: 'Pagination',
	renderTo: '#sample',
	data: new PageCollection(),
	$header: {
		layout: 'float',
		// $title: {
		// 	state: 'tiny'
		// },
		$tools: {
			etype: 'box',
			as: 'right',
			items: [{
				etype: 'grid-pagination',
//				state: 'tiny'
			}]
		}
	},
	$content: {
		as: 'panel-content',
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
