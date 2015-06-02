
var dialog3 = $.ergo({
	etype: 'panel',
	cls: 'modal',
	mixins: ['modal'],
	include: 'effects',
	title: 'Диалог',
	closeOn: 'outerClick',
	width: 600,
	effects: {
		show: 'fadeIn',
		hide: 'fadeOut',
		delay: 400
	},
	// $header: {
		// $toolbar: {
			// layout: 'bar',
			// cls: 'right',
			// defaultItem: {
				// etype: 'button'
			// },
			// items: [{text: 'ОК', state: 'primary'}, 'Отмена']
		// }
	// },
	$content: {
		cls: 'step-box',
		$sidebar: {
			etype: 'html:aside',
			$icon: {
				etype: 'icon',
				state: 'fa-line-chart fa-4x'
			},
			$steps: {
				etype: 'list',
				cls: 'step-list',
				defaultItem: {
					$caret: {
						etype: 'html:span',
						weight: 100
					},
					$content: {
						etype: 'link'
					},
					set: {
						'text': function(v) { this.content.opt('text', v); }
					}
				},
				items: [{text: 'Подготовка и проверка данных', state: 'selected'}, 'Экспорт', 'Отчет об ошибках']
			}			
		},
		$content: {
			items: [{
				$content: {
					text: LOREMIPSUM,//+LOREMIPSUM,
					autoHeight: true,
					height: 300
				},
				$buttons: {
					layout: 'bar',
					cls: 'right',
					items: [{etype: 'button', text: 'Далее'}]
				}
			}, {}, {}]
		}
	}
});




var dialog4 = $.ergo({
	etype: 'panel',
	cls: 'modal',
	mixins: ['modal', 'effects'],
	title: 'Диалог',
	closeOn: 'outerClick',
	width: 600,
	effects: {
		show: 'fadeIn',
		hide: 'fadeOut',
		delay: 400
	},
	// $header: {
		// $toolbar: {
			// layout: 'bar',
			// cls: 'right',
			// defaultItem: {
				// etype: 'button'
			// },
			// items: [{text: 'ОК', state: 'primary'}, 'Отмена']
		// }
	// },
	$content: {
		cls: 'wizard-box',
		$steps: {
			etype: 'list',
			cls: 'step-list',
			layout: 'hbox',
			defaultItem: {
				width: 200,
				$icon: {
					etype: 'html:i',
					cls: 'step-number',
					weight: -100
				},
				// $caret: {
					// etype: 'html:span',
					// weight: 100
				// },
				$title: {
					etype: 'html:span',
					cls: 'title'
				},
				$content: {
					etype: 'link'
				},
				set: {
					'text': function(v) { this.content.opt('text', v); },
					'title': function(v) { this.title.opt('text', v); },
					'index': function(v) { this.icon.opt('text', v); }
				}
			},
			items: [
				{text: 'Подготовка и проверка данных', title: 'Шаг 1', index: 1, state: 'selected'}, 
				{text: 'Экспорт', title: 'Шаг 2', index: 2, state: 'selected'}, 
				{text: 'Отчет об ошибках', title: 'Шаг 3', index: 3, state: 'selected'} 
			]
		},
/*		
		$sidebar: {
			etype: 'html:aside',
			$icon: {
				etype: 'icon',
				state: 'fa-line-chart fa-4x'
			},
			$steps: {
				etype: 'list',
				cls: 'step-list',
				defaultItem: {
					$caret: {
						etype: 'html:span',
						weight: 100
					},
					$content: {
						etype: 'link'
					},
					set: {
						'text': function(v) { this.content.opt('text', v); }
					}
				},
				items: [{text: 'Подготовка и проверка данных', state: 'selected'}, 'Экспорт', 'Отчет об ошибках']
			}			
		},
*/		
		$content: {
			items: [{
				$content: {
					text: LOREMIPSUM,//+LOREMIPSUM,
					autoHeight: true,
					height: 300
				},
				$buttons: {
					layout: 'bar',
					cls: 'right',
					items: [{etype: 'button', text: 'Далее'}]
				}
			}, {}, {}]
		}
	}
});








var buttons = $.ergo({
	etype:'box',
	layout: 'bar',
	items: [{
		etype: 'button',
		text: 'Пошаговый диалог №1',
		onClick: function() {
			dialog3.render('body');
			dialog3.open();
		}		
	}, {
		etype: 'button',
		text: 'Пошаговый диалог №2',
		onClick: function() {
			dialog4.render('body');
			dialog4.open();
		}		
	}]
});




buttons.render('#sample');


