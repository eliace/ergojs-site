
w = $.ergo({
	etype: 'box',
	width: 800,
	cls: 'bordered rounded padding',
	$title: {
		etype: 'html:h3',
		cls: 'title',
		$icon: {
			etype: 'icon',
			cls: 'fa-plug before'
		},
		$content: {
			etype: '.',
			text: 'Плагины'
		}
	},
	$content: LOREMIPSUM,
	style: {'margin-bottom': 24} //FIXME
}); 

w.render('#sample');



w = $.ergo({
	etype: 'box',
	width: 800,
	cls: 'bordered rounded padding',
	$header: {
		etype: 'html:h3',
		cls: 'title',
		$icon: {
			etype: 'icon',
			cls: 'fa-cogs medium before'
		},
		$content: {
			etype: 'text',
			text: 'Настройки',
			$content: {
				etype: '.',
			},
			$subheader: {
				etype: 'title',
				cls: 'sub',
				text: 'Управление системными параметрами, пользователями и пр.'
			}
		}
	},
	$content: LOREMIPSUM_2
}); 

w.render('#sample');

