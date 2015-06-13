
$context.section('Простая панель');
$context.section_begin('panel-basic');
$context.section_end('panel-basic');


var w = $.ergo({
	etype: 'panel',
	title: 'Header',
	cls: 'bordered divided padded',
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
	title: 'Header',
	cls: 'padded divided-header',
	$header: {
//		cls: 'no-padding',
		$content: {
			etype: 'html:h5',
			cls: 'header',
			$icon: {
				etype: 'icon',
				cls: 'fa-cogs',
				weight: -10
			},
			$content: {
				etype: 'text',
				$content: {
					etype: '&text',
				},
				$subheader: {
					etype: 'text',
					cls: 'sub-header',
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
	title: 'Header',
	cls: 'padded',
	$header: {
		$content: {
			cls: 'header large'
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});




$.ergo({
	etype: 'box',
	cls: 'list x4-indented',
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
		cls: 'item-align-right',
		$buttons: {
			etype: 'box',
			cls: 'box items gap',
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
		cls: 'item-align-center gap',
		$buttons: {
			etype: 'box',
//			layout: 'hbox',
			cls: 'items gap',				
			defaultItem: {
				etype: 'button'
			},
			items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
		},
		$icons: {
			etype: 'box',
//			layout: 'hbox',
			cls: 'items gap',				
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
		cls: 'bordered divided padded margin',
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
	items: [{
		title: 'Default',
	}, {
		title: 'Basic',		
		cls: 'basic'
	}, {
		title: 'Primary',		
		cls: 'primary'
	}, {
		title: 'Success',
		cls: 'success'
	}, {
		title: 'Info',
		cls: 'info'
	}, {
		title: 'Warning',
		cls: 'warning'
	}, {
		title: 'Danger',
		cls: 'danger'
	}]
});


w.render('#sample');
