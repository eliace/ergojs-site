

var panel1 = $.ergo({
	etype: 'panel',
	title: 'Title',
	cls: 'padded divided-header',
	$header: {
//		cls: 'no-padding',
		$title: {
			etype: 'html:h5',
			cls: 'title',
			$icon: {
				etype: 'icon',
				cls: 'fa-cogs before medium',
				weight: -10
			},
			$content: {
				etype: 'text',
				$content: {
					etype: '.',
				},
				$subheader: {
					etype: 'title',
					cls: 'sub',
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
		$title: {
			cls: 'large'
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



