
$context.section('Простая панель');
$context.section_begin('panel-basic');
$context.section_end('panel-basic');


var w = $.ergo({
	etype: 'panel',
	title: 'Header',
	as: 'bordered divided padded',
	$header: {
	},
	$content: {
		text: LOREMIPSUM
	},
	$footer: {
		$content: {
			etype: '.',
			text: 'Footer'
		}
	}
});


w.render('#sample');

$context.section('Заголовок');
$context.section_begin('panel-header');
$context.section_end('panel-header');


var panel1 = $.ergo({
	etype: 'panel',
	title: 'Title',
	as: 'padded divided-header',
	$header: {
//		cls: 'no-padding',
		$title: {
			etype: 'html:h5',
			as: 'title',
			$icon: {
				etype: 'icon',
				as: 'fa-cogs before medium',
				weight: -10
			},
			$content: {
				etype: 'text',
				$content: {
					etype: '.',
				},
				$subheader: {
					etype: 'title',
					as: 'sub',
					text: 'Управление системными параметрами, пользователями и пр.'
				}
			}
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});





var panel2 = $.ergo({
	etype: 'panel',
	title: 'Title',
	as: 'padded',
	$header: {
		$title: {
			as: 'large'
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});




$.ergo({
	etype: 'box',
	as: 'list __gap-x4',
//	layout: 'grid',
	renderTo: '#sample',
	items: [ panel1, panel2 ]
});

$context.section('Кнопки в подвале');
$context.section_begin('panel-buttons-footer');
$context.section_end('panel-buttons-footer');


var panel1 = $.ergo({
	etype: 'panel',
	title: 'Header',
	as: 'padded',
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
		as: '__right',
		$buttons: {
			etype: 'box',
			as: 'items __gap',
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
	as: 'padded',
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
		as: '__center __gap',
		$buttons: {
			etype: 'box',
//			layout: 'hbox',
			as: 'items __gap',
			defaultItem: {
				etype: 'button'
			},
			items: [{text: 'ОК', state: 'primary'}, 'Отмена']
		},
		$icons: {
			etype: 'box',
//			layout: 'hbox',
			as: 'items __gap',				
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

$context.section('Кнопки в заголовке');
$context.section_begin('panel-buttons-header');
$context.section_end('panel-buttons-header');


var panel1 = $.ergo({
	etype: 'panel',
	title: 'Header',
	as: 'bordered divided padded',
	$header: {
//		cls: 'box-medium',
		layout: 'float',
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
		layout: 'float',
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

$context.section('Типы');
$context.section_begin('panel-type');
$context.section_end('panel-type');

var w = $.ergo({
	etype: 'box',
	// layout: 'grid',
	// pattern: [4, 4, 4],
//	renderTo: '#sample',
//	cls: 'list',

	layout: {
		etype: 'tiles',
		size: 4
	},
	// layout: 'tiles',
	// cls: 'four',
	defaultItem: {
		etype: 'panel',
//		width: 187,
		as: 'bordered divided padded margin',
		// $footer: {
		// 	autoRender: true,
		// 	$toolbar: {
		// 		etype: 'tool-bar',
		// 		items: [{
		// 			layout: 'bar',
		// 			defaultItem: {
		// 				etype: 'button'
		// 			},
		// 			items: [{text: 'ОК', state: 'primary'}, 'Отмена']
		// 		}]
		// 	}
		// },
		$content: {
//			cls: 'panel-content',
			text: LOREMIPSUM.substr(0, 200)
		}
	},
	items: [
		{	title: 'Default' },
		{	title: 'Basic',	as: 'basic' },
		{	title: 'Primary',	as: 'primary' },
		{	title: 'Success',	as: 'success'	},
		{	title: 'Info', as: 'info'	}, 
		{	title: 'Warning',	as: 'warning'	},
		{	title: 'Danger', as: 'danger' },
		{	title: 'Inverted', as: 'inverted'	}
	]
});


w.render('#sample');



