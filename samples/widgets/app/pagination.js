

var data = [1,2,3,4,5];

var w = $.ergo({
	etype: 'list',
	cls: 'pagination',
	components: {
		nextBtn: {
			etype: 'html:li',
			weight: 100,
			$content: {
				etype: 'link',
				text: '»',
				binding: false
			}
		},
		prevBtn: {
			etype: 'html:li',
			weight: -100,
			$content: {
				etype: 'link',
				text: '«',
				binding: false
			}			
		}
	},
	defaultItem: {
		$content: {
			etype: 'link',
		},
		binding: false					
	},
	dynamic: true,
	data: data
});


w.$render('#sample');
