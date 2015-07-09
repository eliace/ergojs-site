
var dlg = new Dialog({
	cls: 'simple center padded',
	title: 'Диалог',
	$header: {
		layout: 'fluid',
		$buttons: {
			etype: 'box',
			cls: 'align-right tools',
			defaultItem: {
				etype: 'icon',
				cls: 'contextual action',
				onClick: function(e) {
					this.events.rise(this.opt('name'));
				}
			},
			items: [{
				cls: 'close',
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
