

var dlg = new Dialog({
	cls: 'simple',
	title: 'Диалог',
	$footer: {
		autoRender: true,
		$buttons: {
			layout: 'bar',
			cls: 'bar-center',
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



