
var w = $.ergo({
	etype: 'panel',
	cls: 'box bordered padded divided',
	title: 'Pagination',
	renderTo: '#sample',
	data: data,
	$header: {
		layout: 'fluid',
		$content: {
			etype: 'html:h4'
		},
		$tools: {
			etype: 'box',
			cls: 'right',
			$pagination: {
				etype: 'pagination',
			}
		}
	},
	$content: {
		cls: 'panel-content',
		text: LOREMIPSUM
	},
	$footer: {
		layout: 'fluid',
		$pagination: {
			etype: 'pagination'
		},
		$buttons: {
			etype: 'box',
			layout: 'hbox',
			cls: 'right __gap',
			defaultItem: {
				etype: 'button'
			},
			items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
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
