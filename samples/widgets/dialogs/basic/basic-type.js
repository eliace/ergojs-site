

var dlg = new DialogX({
	as: 'paper center padded',
	title: 'Диалог',
	states: {
		'default:type': '',
		'basic:type': 'basic',
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
		$buttons: {
			etype: 'box',
			layout: 'hbox',
//			cls: 'fluid-right sz-normal',
			as: '__center __gap',
			defaultItem: {
				etype: 'button',
				onClick: function() {
					this.rise('changeTheme', {theme: this.opt('text')});
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
