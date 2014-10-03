
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


//w.$render('body');
//w.open();


var button = $.ergo({
	etype: 'button',
	text: 'Новое окно',
	onClick: function() {
		w.$render('body');
		w.open(300, 200);
	}
});

button.$render('#sample');
