
w = $.ergo({
	etype: 'box',
	width: 800,
	cls: 'bordered rounded padding-x2',
	$header: {
		etype: 'html:h3',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-plug'
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
	cls: 'bordered rounded padding-x2',
	$header: {
		etype: 'html:h3',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-cogs'
		},
		$content: {
			etype: 'text',
			text: 'Настройки',
			$content: {
				etype: '.',
			},
			$subheader: {
				etype: 'text',
				cls: 'sub-header',
				text: 'Управление системными параметрами, пользователями и пр.'
			}
		}
	},
	$content: LOREMIPSUM_2
}); 

w.render('#sample');

