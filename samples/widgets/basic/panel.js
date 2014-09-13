
var w = $.ergo({
	etype: 'box',
	items: [{
		etype: 'panel',
		title: 'Демо',
		state: 'bordered',
		$content: LOREMIPSUM,
		$footer: {
			autoRender: true,
			layout: 'bar',
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
		state: 'bordered centered',
		$content: LOREMIPSUM,
		width: '60%',
		$footer: {
			autoRender: true,
			layout: 'bar',
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
		state: 'bordered centered',
		$content: LOREMIPSUM,
		width: '60%',
		$footer: {
			autoRender: true,
			layout: 'bar',
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



