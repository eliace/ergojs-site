
w = $.ergo({
	etype: 'box',
	width: 800,
	cls: 'bordered rounded box-large',
	$header: {
		etype: 'html:h2',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-plug'
		},
		$content: {
			etype: '&text',
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
	cls: 'bordered rounded box-large',
	$header: {
		etype: 'html:h2',
		cls: 'header',
		$icon: {
			etype: 'icon',
			cls: 'fa-cogs'
		},
		$content: {
			etype: 'text',
			text: 'Настройки',
			$content: {
				etype: '&text',
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

