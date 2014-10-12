
var w = $.ergo({
	etype: 'panel',
	cls: 'window',
	mixins: ['window'],
	state: 'widget',
	title: 'Dialog',
	width: 600,
	height: 300,
//	destroyOnClose: true,
	$header: {
		$toolbar: {
			etype: 'tool-bar',
			$dialogButtons: {
				layout: 'hbox',
				defaultItem: {
					etype: 'icon-button',
					state: 'small line',
					onClick: function() {
						this.events.rise('action', {action: this.opt('text')});
					},
					$content: {
						states: {
							'settings': 'fa-cog',
							'move': 'fa-arrows-alt',
							'expand': 'fa-expand',
							'close': 'fa-close'
						}
					}
				},
				items: ['settings', 'move', 'expand', 'close']
			}
		}
	},
	
	onAction: function(e) {
		
		if(e.action == 'close') {
			this.close();
		}
		
	}
	
	
//	autoRender: true
});


//w.$render('body');
//w.open();


var button = $.ergo({
	etype: 'button',
	text: 'Новое окно',
	onClick: function() {
		w.$render('body');
		w.open(300, 200);
	}
});

button.$render('#sample');
