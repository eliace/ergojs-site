

var w = $.ergo({
	etype: 'tree',

	data: data,

	cls: 'tree',

	nestedItem: {
		cls: 'item margin-top items-align-top',

		layout: 'columns',	// LAYOUT

		$image: {
			etype: 'html:img',
			cls: 'rounded before',
			binding: 'src',
			col: 'avatar-img',
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
			col: 'content',
			$content: {
				etype: '.',
				dataId: 'full_name'
			},
			$email: {
				etype: 'text',
				cls: 'description',
				dataId: 'email'
			}			
		},
		$subtree: {
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