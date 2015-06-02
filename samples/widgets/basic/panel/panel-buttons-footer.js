

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

