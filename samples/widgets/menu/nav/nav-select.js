

var data = [{
	title: 'Главная',
	icon: 'fa-dashboard',
	name: 'dashboard'
}, {
	title: 'Товары',
	icon: 'fa-dashboard',
	name: 'dashboard'
}, {
	title: 'Организации',
	icon: 'fa-dashboard',
	name: 'dashboard'
}, {
	title: 'Личный кабинет',
	icon: 'fa-dashboard',
	name: 'dashboard'
}];



var w = $.ergo({
	etype: 'navigation',
	style: {'margin-top': 32},
	$content: {
		items: [{
			etype: 'list',
			cls: 'nav-menu',
			include: 'selectable',
			data: data,
			defaultItem: {
				$content: {
					etype: 'link',
					$content: {
						etype: '&text',
						format: '#{title}'
					}
				},
				actions: {
					'jquery:click': 'select'
				}				
			}
		}]
	}
});


w.render('#sample');
