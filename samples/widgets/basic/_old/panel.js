

$context.section('Кнопки в подвале');



var w = $.ergo({
	etype: 'box',
	layout: 'grid',
//	pattern: [6, 6],
	items: [{
		etype: 'panel',
		title: 'Демо',
		cls: 'widget default',
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		},
//		width: '60%',
		$footer: {
			autoRender: true,
			layout: 'hbox',
			cls: 'align-right box-medium',  // выравниваем элементы + отступ
			$buttons: {
				layout: 'bar',
				defaultItem: {
					etype: 'button'
				},
				items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
			}
		}		
	}, {
		etype: 'panel',
		title: 'Демо',
		cls: 'widget default',
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		},
//		width: '60%',
		$footer: {
			autoRender: true,
			layout: 'bar',
//			etype: 'tool-bar',
//			state: 'center',
			cls: 'align-center box-medium',  // выравниваем элементы + отступ
			$buttons: {
				layout: 'bar',
				defaultItem: {
					etype: 'button'
				},
				items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
			},
			$icons: {
				layout: 'bar',
				defaultItem: {
					etype: 'icon-button'
				},
				items: [{icon: 'fa-globe'}, {icon: 'fa-cogs'}]			
			}
		}		
	}]
});

w.render('#sample');




$context.section('Кнопки в заголовке');




$.ergo({
	etype: 'box',
	layout: 'grid',
	renderTo: '#sample',
	items: [{
		etype: 'panel',
		title: 'Демо',
		cls: 'widget default',
		$header: {
			cls: 'box-medium',
			$toolbar: {
				etype: 'tool-bar',
				items: [{
					layout: 'bar',
					defaultItem: {
						etype: 'button'
					},
					items: [{text: 'ОК', state: 'primary'}, 'Отмена']
				}]
			}
		},
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		}
	}, {
		etype: 'panel',
		title: 'Демо',
		cls: 'widget default',
		$header: {
			$title: {
				cls: 'tiny'
			},
			$toolbar: {
				etype: 'tool-bar',
				cls: 'tiny',
				items: [{
					etype: 'button-box',
					defaultItem: {
						cls: 'tool-item'
					},
//					cls: 'tools-tiny',
					items: ['Добавить', 'Удалить', 'Редактировать']
				}, {
					layout: 'hbox',
//					cls: 'tools-tiny',
					defaultItem: {
						etype: 'icon-button',
						state: 'line tool-item'
					},
					items: ['fa-chevron-up', {
						etype: 'dropdown-button',
						text: 'fa-cog',
						components: {
							'!content': {
								etype: 'icon-button',
								onClick: function(e) {
									this.parent.states.toggle('opened');
									e.base.stopPropagation();
								}
							}							
						},
//						mixins: ['dropdown'],
						// $content: {
							// onClick: function() {
								// this.parent.states.toggle('opened');
							// }
						// },
						$dropdown_items: ['Настройки', 'Размер']

					}, 'fa-close']
				}]
			}
		},
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		},
		$footer: {
			autoRender: true,
//			etype: 'tool-bar',
			layout: 'hbox',
			cls: 'align-right box-medium',
			$buttons: {
				layout: 'bar',
				defaultItem: {
					etype: 'button'
				},
				items: [{text: 'ОК', state: 'primary'}, 'Отмена']			
			}
		}
	}]
});




$context.section('Простые темы оформления');

// $.ergo({
// 	etype: 'html:h3',
// 	cls: 'demo-section',
// 	text: 'Простые темы оформления',
// 	renderTo: '#sample'
// });



var w = $.ergo({
	etype: 'box',
	layout: 'grid',
	renderTo: '#sample',
	defaultItem: {
		etype: 'panel',
		$footer: {
			autoRender: true,
			$toolbar: {
				etype: 'tool-bar',
				items: [{
					layout: 'bar',
					defaultItem: {
						etype: 'button'
					},
					items: [{text: 'ОК', state: 'primary'}, 'Отмена']
				}]
			}
		},
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		}
	},
	items: [{
		title: 'Default',
		cls: 'widget default'
	}, {
		title: 'Dark',		
		cls: 'widget dark'
	}, {
		title: 'Simple',
		cls: 'widget simple'
	}, {
		title: 'Light',
		cls: 'widget light'
	}]
});



