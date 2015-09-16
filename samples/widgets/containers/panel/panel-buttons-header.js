

var panel1 = $.ergo({
	etype: 'panel',
	title: 'Header',
	as: 'bordered divided padded',
	$header: {
//		cls: 'box-medium',
		layout: 'fluid',
		as: 'padding',
//		cls: 'adjust medium',
		$toolbar: {
//			etype: 'tool-bar',
			etype: 'box',
			as: 'align-right',
			items: [{
//				layout: 'bar',
				layout: 'hbox',
				as: '__gap',
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
	as: 'bordered divided padded',
	$header: {
		as: 'padding',
		layout: 'fluid',
		$toolbar: {
			etype: 'box',
			layout: 'hbox',
			as: 'align-right __gap',
			items: [{
//				etype: 'button-box',
				etype: 'box',
				layout: 'hbox',
				as: '__gap',
				defaultItem: {
					etype: 'button'
//					cls: 'tool-item'
				},
//					cls: 'tools-tiny',
				items: ['Добавить', 'Удалить', 'Редактировать']
			}, {
				etype: 'box',
				layout: 'hbox',
				as: '__gap',
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
	cls: 'list __gap-x4',
//	layout: 'grid',
	renderTo: '#sample',
	items: [ panel1, panel2 ]
});
