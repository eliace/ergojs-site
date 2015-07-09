
var dlg = new DialogX({
	cls: 'simple center padded',
	title: 'Диалог',
	$content: {
		text: 'Сюда будет загружен HTML',
		height: 'auto'
	}
});


dlg.load = function() {

	var d = this;

	setTimeout(function() {
		d.content.el.load('data/info.html', function(){
//			d.resize();
		});
	}, 1500);

};



$.ergo({
	etype: 'button',
	renderTo: '#sample',
	dialog: dlg,
	text: 'Диалог',
	onClick: function() {
		this.options.dialog.open();
		this.options.dialog.load();
	}	
});
