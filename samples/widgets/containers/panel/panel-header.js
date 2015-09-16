

var panel1 = $.ergo({
	etype: 'panel',
	title: 'Title',
	as: 'padded divided-header',
	$header: {
//		cls: 'no-padding',
		$title: {
			etype: 'html:h5',
			as: 'title',
			$icon: {
				etype: 'icon',
				as: 'fa-cogs before medium',
				weight: -10
			},
			$content: {
				etype: 'text',
				$content: {
					etype: '.',
				},
				$subheader: {
					etype: 'title',
					as: 'sub',
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
	as: 'padded',
	$header: {
		$title: {
			as: 'large'
		}
	},
	$content: {
		text: LOREMIPSUM
	}
});




$.ergo({
	etype: 'box',
	as: 'list __gap-x4',
//	layout: 'grid',
	renderTo: '#sample',
	items: [ panel1, panel2 ]
});
