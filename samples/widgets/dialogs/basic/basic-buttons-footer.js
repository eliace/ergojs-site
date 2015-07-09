

var dlg = new Dialog({
	cls: 'simple padded center',
	title: 'Диалог',
	$footer: {
		$buttons: {
			etype: 'box',
			layout: 'hbox',
			cls: '__center __gap',
			defaultItem: {
				etype: 'button',
				onClick: function(e) {
					this.events.rise(this.opt('name'));
				}
			},
			items: [{
				state: 'primary',
				text: 'ОК',
				name: 'ok'
			}, {
				state: 'default',
				text: 'Отмена',
				name: 'cancel'
			}]
		}
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



