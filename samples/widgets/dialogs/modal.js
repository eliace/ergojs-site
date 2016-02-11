
var dialog1 = $.ergo({
	etype: 'panel',
	cls: 'modal widget dark',
	mixins: ['modal'],
	include: 'effects',
	effects: {
		show: {type: 'fadeIn', delay: 400}
	},
//	state: 'bordered',
	title: 'Диалог',
	closeOn: 'outerClick',
	width: 600,
//	height: 300,
	// effects: {
		// delay: 300
	// },
	$header: {
		$title: {
			state: 'tiny'
		},
		$toolbar: {
			etype: 'tool-bar',
			
			$dialogButtons: {
				layout: 'hbox',
				defaultItem: {
					etype: 'icon-button',
					state: 'tool tiny flat',
					onClick: function() {
						this.rise('action', {action: this.opt('text')});
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
			
/*			
			cls: 'right',
			defaultItem: {
				etype: 'icon-button',
				state: 'tool flat'
			},
			items: [{icon: 'fa-cog'}, {icon: 'fa-arrows-alt'}, {icon: 'fa-expand'}, {icon: 'fa-close'}]
*/			
		}
	},
	$content: {
		text: LOREMIPSUM,
		cls: 'panel-content'
	},
	$footer: {
		autoRender: true,
		$toolbar: {
			etype: 'tool-bar',
			cls: 'center',
			defaultItem: {
				etype: 'button',
				onClick: function() {
					this.rise('action', {action: this.opt('name')});
				}
			},
			items: [{text: 'ОК', state: 'primary', name: 'ok'}, {text: 'Отмена', name: 'cancel'}]
		}		
	},
	
	onAction: function(e) {
		
		if(e.action == 'close' || e.action == 'ok' || e.action == 'cancel')
			this.close();
		
	},

	onClick: function(e) {
		e.base.stopPropagation();
	}
	
	
	
});





var dialog2 = $.ergo({
	etype: 'panel',
	cls: 'modal widget dark',
	mixins: ['modal', 'effects'],
//	state: 'bordered',
	title: 'Диалог',
	closeOn: 'outerClick',
	width: 600,
//	height: 300,
	effects: {
		delay: 300
	},
	$header: {
		$toolbar: {
			etype: 'tool-bar',
			$buttons: {
				layout: 'bar',
				defaultItem: {
					etype: 'button'
				},
				items: [{text: 'ОК', state: 'primary'}, 'Отмена']				
			}
		}
	},
	$content: {
		text: LOREMIPSUM,
		cls: 'panel-content'
	}
});











var buttons = $.ergo({
	etype:'box',
	layout: 'bar',
	items: [{
		etype: 'button',
		text: 'Модальный диалог №1',
		onClick: function() {
			dialog1.render('body');
			dialog1.open();
			
			// setTimeout(function(){
				// w.resize(800, 400);
			// },4000);
			
		}		
	}, {
		etype: 'button',
		text: 'Модальный диалог №2',
		onClick: function() {
			dialog2.render('body');
			dialog2.open();
		}		
	}]
});




buttons.render('#sample');


