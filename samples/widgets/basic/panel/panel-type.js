
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

