

var w = $.ergo({
	etype: 'tree',

	data: data,

	as: 'tree',

	nestedItem: {
		as: 'item margin-top',
		layout: 'hbox',
//		layout: 'columns',
		$image: {
			etype: 'html:img',
			as: 'rounded before',
			binding: 'prop:src',
			format: function(v) {
				var s = v.id;
				if(v.id < 10) s = '0'+s;
				if(v.id < 100) s = '0'+s;
				return 'demo/blog/img/avatars/'+s+'.jpg';
			},
			width: 32,
			weight: -10
		},
		$content: {
			$content: {
				etype: '.',
				binding: 'prop:text',
				dataId: 'full_name'
			},
			$email: {
				etype: 'text',
				as: 'description',
				dataId: 'email'
			}
		},
		$sub: {
			hidden: false,
//			autoRender: 'not-empty',
			style: {'padding-left': 20},
			as: 'tree'// items-indent'
			// $content: {
			// 	etype: 'box',
			// 	cls: 'item',
			// }
		}
	}


});


w.render('#sample');
