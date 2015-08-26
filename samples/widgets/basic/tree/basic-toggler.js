

var w = $.ergo({
	etype: 'basic-tree',
	data: USERS,
//	cls: 'items-indent',
	nestedItem: {
		cls: 'margin-top',
		$toggler: {
			cls: 'fa-2x before',
			states: {
				'caret:c': 'fa-angle-right',
				'opened:c': 'fa-angle-down'
			}
		},
		$image: {
			etype: 'html:img',
			cls: 'rounded before',
			binding: 'src',
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
					binding: 'text'

//					dataId: 'full_name'
				},
				$email: {
					etype: 'text',
					cls: 'description',
					format: '#{email}'
//					dataId: 'email'
				}
			}
		},
		binding: function(v) {
			if(v.children) this.states.set('expandable');
		}
	}
	
});


w.render('#sample');

