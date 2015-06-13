

var panel1 = $.ergo({
	etype: 'panel',
	title: 'Header',
	cls: 'bordered divided padded',
	$header: {
//		cls: 'box-medium',
		layout: 'fluid',
		cls: 'padding',
//		cls: 'adjust medium',
		$toolbar: {
//			etype: 'tool-bar',
			etype: 'box',
			cls: 'align-right',
			items: [{
//				layout: 'bar',
				layout: 'hbox',
				cls: 'gap',
				defaultItem: {
					etype: 'button'
				},
				items: [{text: 'ОК', state: 'primary'}, 'Отмена']
			}]
		}
	},
	$content: {
//		cls: 'panel-content',
		text: LOREMIPSUM
	}	
});



var panel2 = $.ergo({
	etype: 'panel',
	title: 'Header',
	cls: 'bordered divided padded',
	$header: {
		cls: 'padding',
		layout: 'fluid',
		$toolbar: {
			etype: 'box',
			layout: 'hbox',
			cls: 'align-right gap',
			items: [{
//				etype: 'button-box',
				etype: 'box',
				layout: 'hbox',
				cls: 'gap',
				defaultItem: {
					etype: 'button'
//					cls: 'tool-item'
				},
//					cls: 'tools-tiny',
				items: ['Добавить', 'Удалить', 'Редактировать']
			}, {
				etype: 'box',
				layout: 'hbox',
				cls: 'gap',
//					cls: 'tools-tiny',
				defaultItem: {
					etype: 'icon-button'
//					state: 'line tool-item'
				},
				items: ['fa-chevron-up', 'fa-cog', 'fa-close']
			}]
		}
	},
	$content: {
//		cls: 'panel-content',
		text: LOREMIPSUM_2
	},
// 	$footer: {
// //		autoRender: true,
// //			etype: 'tool-bar',
// 		layout: 'hbox',
// 		cls: 'item-align-right',
// 		$buttons: {
// //			layout: 'bar',
// 			etype: 'box',
// 			cls: 'box indented',
// 			defaultItem: {
// 				etype: 'button'
// 			},
// 			items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
// 		}
// 	}	
});




$.ergo({
	etype: 'box',
	cls: 'list gap-x4',
//	layout: 'grid',
	renderTo: '#sample',
	items: [ panel1, panel2 ]
});

