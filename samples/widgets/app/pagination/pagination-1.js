
var w = $.ergo({
	etype: 'panel',
	cls: 'widget',
	title: 'Pagination',
	renderTo: '#sample',
	data: data,
	$header: {
		$title: {
			state: 'tiny'
		},
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'pagination',
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
				etype: 'pagination'
			}]
		},
		
		$toolbar: {
			etype: 'tool-bar',
			items: [{
				etype: 'pagination'
			}, {
				layout: 'bar',
				cls: 'pull-right',
				defaultItem: {
					etype: 'button'
				},
				items: ['ОК', 'Отмена']
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


w.opt('index', 24);
