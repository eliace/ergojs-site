
var w = $.ergo({
	etype: 'panel',
	as: 'box bordered padded divided',
	title: 'Pagination',
	renderTo: '#sample',
	data: data,
	$header: {
		layout: 'float',
		// $title: {
		// 	etype: 'html:h4'
		// },
		$tools: {
			etype: 'box',
			as: 'right',
			$pagination: {
				etype: 'pagination',
			}
		}
	},
	$content: {
		as: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		layout: 'float',
		$pagination: {
			etype: 'pagination'
		},
		$buttons: {
			etype: 'button-box',
//			layout: 'hbox',
			as: 'right __gap',
			// defaultItem: {
			// 	etype: 'button'
			// },
			items: [{text: 'ОК', as: 'primary'}, 'Отмена']
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


w.opt('index', 24);
