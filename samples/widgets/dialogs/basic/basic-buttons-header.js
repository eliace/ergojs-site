
var dlg = new Dialog({
	as: 'simple padded center',
	title: 'Диалог',
	$header: {
		layout: 'float',
		as: 'padding',
		$buttons: {
			etype: 'box',
			layout: 'hbox',
			as: 'align-right __gap',
			defaultItem: {
				etype: 'button',
				onClick: function(e) {
					this.rise(this.opt('name'));
				}
			},
			items: [{
				as: 'primary',
				text: 'ОК',
				name: 'ok'
			}, {
				as: 'default',
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
