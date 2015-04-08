

var Dialog = Ergo.widgets.Panel.extend({

	defaults: {
		mixins: ['modal'],
		cls: 'modal widget',
		renderTo: 'body',
		destroyOnClose: true,
		closeOn: 'outerClick',
		width: 600,
		height: 300,
		$content: {
			autoHeight: true
		},

		onOk: function() {
			this.close();
		},

		onCancel: function() {
			this.close();
		}

	}


});






$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		actions: {
			'jquery:click': 'openDialog'
		}
	},
	items: ['Диалог 1', 'Диалог 2'],


	onOpenDialog: function(e) {

		var title = e.target.opt('text');

		if( title == 'Диалог 1' ) {

			var dlg = new Dialog({
				cls: 'simple',
				title: title,
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

			dlg.open();

		}
		else if( title == 'Диалог 2' ) {

			var dlg = new Dialog({
				cls: 'simple',
				title: title,
				$header: {
					$buttons: {
						etype: 'tool-bar',
						cls: 'fluid-right',
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

			dlg.open();

		}



	}

});


