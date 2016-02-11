

var MyDialogX = DialogX.extend({

	defaults: {
		as: 'simple center padded',
		title: 'Диалог',
		$content: {
			height: 'auto',
			layout: 'hbox',
			as: '__center',
			$button: {
				etype: 'button',
				type: 'primary',
				text: 'Открыть новый диалог',
				name: 'newDialog',
				onClick: function() {
					this.rise(this.options.name || 'action');
				}
			}
		},

		onNewDialog: function() {
			var d = new MyDialogX();
			d.open();
		}
	}

});



$.ergo({
	etype: 'button',
	renderTo: '#sample',
	dialog: dlg,
	text: 'Диалог',
	onClick: function() {
		var d = new MyDialogX();
		d.open();
	}
});
