

var panel1 = $.ergo({
	etype: 'panel',
	title: 'Header',
	cls: 'padded divided-header',
	$header: {
//		cls: 'no-padding',
		$content: {
			etype: 'html:h5',
			cls: 'header',
			$icon: {
				etype: 'icon',
				cls: 'fa-cogs',
				weight: -10
			},
			$content: {
				etype: 'text',
				$content: {
					etype: '&text',
				},
				$subheader: {
					etype: 'text',
					cls: 'sub-header',
					text: 'Управление системными параметрами, пользователями и пр.'
				}
			}
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});





var panel2 = $.ergo({
	etype: 'panel',
	title: 'Header',
	cls: 'padded',
	$header: {
		$content: {
			cls: 'header large'
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});




$.ergo({
	etype: 'box',
	cls: 'list x4-indented',
//	layout: 'grid',
	renderTo: '#sample',
	items: [ panel1, panel2 ]
});



