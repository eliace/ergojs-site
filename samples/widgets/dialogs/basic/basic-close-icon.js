
var dlg = new Dialog({
	as: 'simple center padded',
	title: 'Диалог',
	$header: {
		layout: 'fluid',
		$buttons: {
			etype: 'box',
			as: 'align-right tools',
			defaultItem: {
				etype: 'icon',
				as: 'contextual action',
				onClick: function(e) {
					this.events.rise(this.opt('name'));
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
