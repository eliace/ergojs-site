
var w = $.ergo({
	etype: 'box',
	items: [{
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
					items: ['fa-chevron-up', 'fa-cog', 'fa-close']
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
	}, {
		etype: 'html:br'
	}, {
		etype: 'panel',
		title: 'Демо',
		cls: 'widget centered',
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		},
		width: '60%',
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
		etype: 'html:br'
	}, {
		etype: 'panel',
		title: 'Демо',
		cls: 'widget centered',
		$content: {
			cls: 'panel-content',
			text: LOREMIPSUM
		},
		width: '60%',
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



var w = $.ergo({
	etype: 'panel',
	title: 'Демо',
	cls: 'widget',
	renderTo: '#sample',
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
});


