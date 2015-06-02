
$.ergo({
	etype: 'box',
//	layout: 'grid',
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

