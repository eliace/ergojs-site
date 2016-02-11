

var acc = $.ergo({
	etype: 'box',
	as: 'accordion list bordered rounded divided',
	defaultItem: {
		include: 'expandable exclusive-expand',
		$title: {
			etype: 'box',
			as: 'title action toggle box padding small',
			weight: -10,
			$caret: {
				etype: 'icon',
				as: 'caret +point-right',
				weight: -10
			},
			$content: {
				etype: '.'
			},
			onClick: 'action:expand'
		},
		$sub: {
			etype: 'box',
			include: 'effects',
			effects: {
				'show': {type: 'slideDown', delay: 300},
				'hide': {type: 'slideUp', delay: 300}
			},
			as: 'box padding'
		}
	},
	items: [{
		$title__text: 'Section 1',
		$sub__text: LOREMIPSUM
	}, {
		$title__text: 'Section 2',
		$sub__text: LOREMIPSUM_2
	}, {
		$title__text: 'Section 3',
		$sub__text: LOREMIPSUM_3
	}, {
		$title__text: 'Section 4',
		$sub__text: LOREMIPSUM_4
	}]
});



acc.render('#sample');
