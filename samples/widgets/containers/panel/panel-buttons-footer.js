

var panel1 = $.ergo({
	etype: 'panel',
	title: 'Header',
	cls: 'padded',
// 	$header: {
// //		cls: 'no-padding',
// 		$content: {
// 			cls: 'header small'
// 		}
// 	},
	$content: {
//			cls: 'panel-content',
		text: LOREMIPSUM
	},
//		width: '60%',
	$footer: {
//			autoRender: true,
		layout: 'hbox',
		cls: '__right',
		$buttons: {
			etype: 'box',
			cls: 'items __gap',
			defaultItem: {
				etype: 'button'
			},
			items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
		}
	}			
});



var panel2 = $.ergo({
	etype: 'panel',
	title: 'Header',
	cls: 'padded',
	// $header: {
	// 	cls: 'box border-bottom'
	// },
	$content: {
//			cls: 'panel-content',
		text: LOREMIPSUM
	},
//		width: '60%',
	$footer: {
//			autoRender: true,
//			layout: 'bar',
//			etype: 'tool-bar',
//			state: 'center',
		layout: 'hbox',
		cls: '__center __gap',
		$buttons: {
			etype: 'box',
//			layout: 'hbox',
			cls: 'items __gap',				
			defaultItem: {
				etype: 'button'
			},
			items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
		},
		$icons: {
			etype: 'box',
//			layout: 'hbox',
			cls: 'items __gap',				
			defaultItem: {
				etype: 'icon-button'
			},
			items: ['fa-globe', 'fa-cogs']			
		}
	}			
});





var w = $.ergo({
	etype: 'box',
	layout: 'grid',
//	cls: 'box item-padding',
//	pattern: [6, 6],
	items: [ panel1, panel2 ]
});

w.render('#sample');

