
var w = $.ergo({
	etype: 'panel',
	cls: 'window',
	mixins: ['window'],
	state: 'bordered',
	title: 'Dialog',
	width: 600,
	height: 300,
//	autoRender: true
});



w.$render('body');
w.open();
