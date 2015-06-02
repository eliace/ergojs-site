
var dlg = new Dialog({
	cls: 'simple',
	title: 'Диалог',
	$header: {
		cls: 'sz-large',
		$buttons: {
			etype: 'tool-bar',
			cls: 'fluid-right',
			defaultItem: {
				etype: 'icon',
				cls: 'contextual action-icon',
				onClick: function(e) {
					this.events.rise(this.opt('name'));
				}
			},
			items: [{
				icon: 'fa-close',
//						state: 'contextual', // конка должна принципиально иметь размер tiny
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
