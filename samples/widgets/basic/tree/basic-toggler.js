

var w = $.ergo({
	etype: 'basic-tree',
	data: USERS,
//	cls: 'items-indent',
	nestedItem: {
		as: 'margin-top',
		$toggler: {
			as: 'fa-2x before',
			states: {
				toggler: {
					'caret': 'cls:fa-angle-right',
					'opened': 'cls:fa-angle-down'
				}
			}
		},
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
			width: 40,
			weight: -10
		},
		$content: {
			etype: 'box',
			$content: {
				$content: {
					etype: '.',
					format: '#{full_name}',
					binding: 'prop:text'

//					dataId: 'full_name'
				},
				$email: {
					etype: 'text',
					as: 'description',
					format: '#{email}'
//					dataId: 'email'
				}
			}
		},
		binding: function(v) {
			if(v.children) this.set('expandable');
		}
	}

});


w.render('#sample');
