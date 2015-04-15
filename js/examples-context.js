


$context = new Ergo.core.Context();




$context.alert = function(msg, type) {
	
	type = type || 'info';
	
	// var titles = {
		// info: 'Информация! ',
		// success: 'Успех! '
	// };
	var icons = {
		info: 'fa-info',
		success: 'fa-check'
	};
	
	$.ergo({
		renderTo: '#sample',
		etype: 'simple-alert',
		$icon: {
			cls: 'fa fa-fw rounded'
		},
//			title: titles[type],
		icon: icons[type],
		text: msg,
		state: type
	});
	
};



$context.section = function(s) {

	$.ergo({
		etype: 'box',
		renderTo: '#sample',
		cls: 'demo-section',
		text: s,
		$icon: {
			etype: 'icon',
			cls: 'fa-arrow-circle-down'
		},
		$content: {
			etype: 'html:h3'
		}
	});

};

