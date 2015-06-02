

var dlg = new DialogX({
	cls: 'paper',
	title: 'Диалог',
	states: {
		'default:type': 'default',
		'primary:type': 'primary',
		'info:type': 'info',
		'success:type': 'success',
		'warning:type': 'warning',
		'danger:type': 'danger',
		'dark:type': 'dark'
	},
	$content: {
		text: 'Нажмите на кнопку для смены темы оформления',
		height: 'auto'
	},
	$footer: {
		autoRender: true,
		$buttons: {
			etype: 'tool-bar',
//					layout: 'bar',
			cls: 'fluid-right sz-normal',
			defaultItem: {
				etype: 'button',
				onClick: function() {
					this.events.rise('changeTheme', {theme: this.opt('text')});
				}
			},
			items: [{
				text: 'default'
			}, {
				text: 'primary'
			}, {
				text: 'info'
			}, {
				text: 'success'
			}, {
				text: 'warning'
			}, {
				text: 'danger'
			}, {
				text: 'dark'
			}]
		}
	},

	onChangeTheme: function(e) {

		this.states.set(e.theme);
		this.header.buttons.item(0).states.set(e.theme);

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
