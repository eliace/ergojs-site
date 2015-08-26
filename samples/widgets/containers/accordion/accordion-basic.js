


var acc = $.ergo({
	etype: 'box',
	cls: 'accordion',
	defaultItem: {
		include: 'expandable exclusive-expand',
		$title: {
			etype: 'box',
			cls: 'title box action toggle small',
			weight: -10,
			$caret: {
				etype: 'icon',
				cls: 'caret',
				state: 'point-right',
				weight: -10
			},
			$content: {
				etype: '.'
			},
			onClick: function() {
				this.events.rise('expand');
			}
		},
		$sub: {
			etype: 'box',
			include: 'effects',
			effects: {
				'show': {type: 'slideDown', delay: 300},
				'hide': {type: 'slideUp', delay: 300}
			}
		}
	},
	items: [{
		$title_text: 'Section 1',
		$sub_text: LOREMIPSUM
	}, {
		$title_text: 'Section 2',
		$sub_text: LOREMIPSUM_2
	}, {
		$title_text: 'Section 3',
		$sub_text: LOREMIPSUM_3
	}, {
		$title_text: 'Section 4',
		$sub_text: LOREMIPSUM_4
	}]
});



acc.render('#sample');