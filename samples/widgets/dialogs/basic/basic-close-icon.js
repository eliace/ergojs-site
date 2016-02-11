
var dlg = new Dialog({
	as: 'simple center padded',
	title: 'Диалог',
	$header: {
		layout: 'float',
		$buttons: {
			etype: 'box',
			as: 'align-right tools',
			defaultItem: {
				etype: 'icon',
				as: 'contextual action',
				onClick: function(e) {
					this.rise(this.opt('name'));
				}
			},
			items: [{
				as: 'close',
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
