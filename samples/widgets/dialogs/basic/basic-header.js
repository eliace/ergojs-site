

var dlg = new DialogX({
	cls: 'simple center padded',
	title: 'Диалог',
	$content: {
		text: 'Нажмите на кнопку для смены заголовка'
	},
	$footer: {
		$buttons: {
			etype: 'box',
			layout: 'hbox',
			cls: '__center __gap',
			defaultItem: {
				etype: 'button',
				onClick: function(e) {
					this.events.rise(this.options.name || 'action');
				}
			},
			items: ['Заголовок 1', 'Заголовок 2']
		}
	},

	onAction: function(e) {
		this.opt('title', e.target.opt('text'));
	}


});


$.ergo({
	etype: 'button',
	renderTo: '#sample',
	dialog: dlg,
	text: 'Диалог',
	onClick: function() {
		this.options.dialog.open();
	}	
});
