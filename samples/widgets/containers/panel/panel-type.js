
var w = $.ergo({
	etype: 'box',
	// layout: 'grid',
	// pattern: [4, 4, 4],
//	renderTo: '#sample',
//	cls: 'list',

	layout: {
		etype: 'tiles',
		size: 4
	},
	// layout: 'tiles',
	// cls: 'four',
	defaultItem: {
		etype: 'panel',
//		width: 187,
		as: 'bordered divided padded margin',
		// $footer: {
		// 	autoRender: true,
		// 	$toolbar: {
		// 		etype: 'tool-bar',
		// 		items: [{
		// 			layout: 'bar',
		// 			defaultItem: {
		// 				etype: 'button'
		// 			},
		// 			items: [{text: 'ОК', state: 'primary'}, 'Отмена']
		// 		}]
		// 	}
		// },
		$content: {
//			cls: 'panel-content',
			text: LOREMIPSUM.substr(0, 200)
		}
	},
	items: [
		{	title: 'Default' },
		{	title: 'Basic',	as: 'basic' },
		{	title: 'Primary',	as: 'primary' },
		{	title: 'Success',	as: 'success'	},
		{	title: 'Info', as: 'info'	}, 
		{	title: 'Warning',	as: 'warning'	},
		{	title: 'Danger', as: 'danger' },
		{	title: 'Inverted', as: 'inverted'	}
	]
});


w.render('#sample');
