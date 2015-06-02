

var MyDialogX = DialogX.extend({

	defaults: {
		cls: 'simple',
		title: 'Диалог',
		$content: {
			height: 'auto',
			$button: {
				etype: 'button',
				type: 'primary',
				text: 'Открыть новый диалог',
				name: 'newDialog',
				onClick: function() {
					this.events.rise(this.options.name || 'action');
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

