

var data = [{
	title: 'Media heading',
	desc: LOREMIPSUM
}];



var w = $.ergo({
	etype: 'box',
	dynamic: true,
	data: data,
	defaultItem: {
		cls: 'media',
		$icon: {
			etype: 'icon',
			state: 'fa-cog'
		},
		$content: {
			$title: {
				etype: 'html:h4',
				dataId: 'title',
				binding: 'text'
			},
			$description: {
				etype: 'line',
				dataId: 'desc'
			}
		}
	}
});



w.$render('#sample');
