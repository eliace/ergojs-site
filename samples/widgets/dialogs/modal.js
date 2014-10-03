
var dialog1 = $.ergo({
	etype: 'panel',
	cls: 'modal',
	mixins: ['modal', 'effects'],
	effects: {
		show: 'fadeIn',
		hide: 'fadeOut',
		delay: 300
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
		$toolbar: {
			etype: 'tool-bar',
			cls: 'right',
			defaultItem: {
				etype: 'icon-button',
				state: 'tool flat'
			},
			items: [{icon: 'fa-cog'}, {icon: 'fa-arrows-alt'}, {icon: 'fa-expand'}, {icon: 'fa-close'}]
		}
	},
	$content: {
		text: LOREMIPSUM
	},
	$footer: {
		autoRender: true,
		$toolbar: {
			layout: 'bar',
			cls: 'center',
			defaultItem: {
				etype: 'button'
			},
			items: [{text: 'ОК', state: 'primary'}, 'Отмена']
		}		
	}
});





var dialog2 = $.ergo({
	etype: 'panel',
	cls: 'modal',
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
			layout: 'bar',
			cls: 'right',
			defaultItem: {
				etype: 'button'
			},
			items: [{text: 'ОК', state: 'primary'}, 'Отмена']
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});











var buttons = $.ergo({
	etype:'box',
	layout: 'bar',
	items: [{
		etype: 'button',
		text: 'Модальный диалог №1',
		onClick: function() {
			dialog1.$render('body');
			dialog1.open();
			
			// setTimeout(function(){
				// w.resize(800, 400);
			// },4000);
			
		}		
	}, {
		etype: 'button',
		text: 'Модальный диалог №2',
		onClick: function() {
			dialog2.$render('body');
			dialog2.open();
		}		
	}]
});




buttons.$render('#sample');


