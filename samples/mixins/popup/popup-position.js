

var w = $.ergo({
	etype: 'box',

	style: {'display': 'inline-block'},

	cls: 'has-popup on-hover at-right',

	$content: {
		etype: '.',
		text: 'Text'
	},
	$popup: {
		etype: 'label',
		include: 'popup',
		text: 'Label'
//		cls: 'at-right'
	}
});

w.render('#sample');