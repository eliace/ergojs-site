

$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Кнопки в подвале',
	renderTo: '#sample'
});



var w = $.ergo({
	etype: 'box',
	layout: 'grid',
//	pattern: [6, 6],
	items: [{
		etype: 'panel',
		title: 'Демо',
		cls: 'widget',
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		},
//		width: '60%',
		$footer: {
			autoRender: true,
			etype: 'tool-bar',
			state: 'right',
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
		cls: 'widget',
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		},
//		width: '60%',
		$footer: {
			autoRender: true,
			etype: 'tool-bar',
			state: 'center',
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

w.$render('#sample');



$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Кнопки в заголовке',
	renderTo: '#sample'
});



$.ergo({
	etype: 'box',
	layout: 'grid',
	renderTo: '#sample',
	items: [{
		etype: 'panel',
		title: 'Демо',
		cls: 'widget',
		$header: {
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
		cls: 'widget',
		$header: {
			$title: {
				state: 'tiny'
			},
			$toolbar: {
				etype: 'tool-bar',
				items: [{
					etype: 'button-box',
					defaultItem: {
						size: 'tiny'
					},
					items: ['Добавить', 'Удалить', 'Редактировать']
				}, {
					layout: 'hbox',
					defaultItem: {
						etype: 'icon-button',
						state: 'tiny line'
					},
					items: ['fa-chevron-up', {
						etype: 'dropdown-button',
						text: 'fa-cog',
						components: {
							'!content': {
								etype: 'icon-button',
								onClick: function(e) {
									this.parent.states.toggle('opened');
									e.baseEvent.stopPropagation();
								}
							}							
						},
//						mixins: ['dropdown'],
						// $content: {
							// onClick: function() {
								// this.parent.states.toggle('opened');
							// }
						// },
						$dropdown: {
							items: ['Настройки', 'Размер']
						}
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
			etype: 'tool-bar',
			state: 'right',
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





$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Темный заголовок',
	renderTo: '#sample'
});



var w = $.ergo({
	etype: 'panel',
	title: 'Демо',
	cls: 'widget dark',
	renderTo: '#sample',
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
});



