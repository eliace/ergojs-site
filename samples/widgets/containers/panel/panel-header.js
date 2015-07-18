

var panel1 = $.ergo({
	etype: 'panel',
	title: 'Title',
	cls: 'padded divided-header',
	$header: {
//		cls: 'no-padding',
		$content: {
			etype: 'html:h5',
			cls: 'title box',
			$icon: {
				etype: 'icon',
				cls: 'fa-cogs before',
				weight: -10
			},
			$content: {
				etype: 'text',
				$content: {
					etype: '&text',
				},
				$subheader: {
					etype: 'text',
					cls: 'sub title',
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
	title: 'Title',
	cls: 'padded',
	$header: {
		$content: {
			cls: 'title box large'
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});




$.ergo({
	etype: 'box',
	cls: 'list __gap-x4',
//	layout: 'grid',
	renderTo: '#sample',
	items: [ panel1, panel2 ]
});



