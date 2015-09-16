
w = $.ergo({
	etype: 'box',
	width: 800,
	as: 'bordered rounded padding',
	$title: {
		etype: 'html:h3',
		as: 'title',
		$icon: {
			etype: 'icon',
			as: 'fa-plug before'
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
	as: 'bordered rounded padding',
	$header: {
		etype: 'html:h3',
		as: 'title',
		$icon: {
			etype: 'icon',
			as: 'fa-cogs medium before'
		},
		$content: {
			etype: 'text',
			text: 'Настройки',
			$content: {
				etype: '.',
			},
			$subheader: {
				etype: 'title',
				as: 'sub',
				text: 'Управление системными параметрами, пользователями и пр.'
			}
		}
	},
	$content: LOREMIPSUM_2
});

w.render('#sample');
