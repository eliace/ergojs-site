

var w = $.ergo({
	etype: 'tree',

	data: data,

	cls: 'tree',

	nestedItem: {
		as: 'item margin-top items-align-top',

		layout: 'columns',	// LAYOUT

		$image: {
			etype: 'html:img',
			as: 'rounded before',
			binding: 'prop:src',
			col: 'avatar-img',
			format: '#{id|avatarUrl}',
			width: 32,
			weight: -10
		},
		$content: {
			col: 'content',
//			format: '#{full_name}'
			$content: {
//				etype: '.',
				binding: 'prop:text',
				dataId: 'full_name'
			},
			$email: {
				etype: 'text',
				cls: 'description',
				dataId: 'email'
			}
		},
		$sub: {
			hidden: false,
			col: 'content',
			cls: 'tree'// items-indent'
			// $content: {
			// 	etype: 'box',
			// 	cls: 'item',
			// }
		}
	}


});


w.render('#sample');
