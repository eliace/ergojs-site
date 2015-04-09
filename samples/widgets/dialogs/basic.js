

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
	layout: 'stack',
	renderTo: '#sample',
	defaultItem: {
		etype: 'button',
		onClick: function(e) {
			this.events.rise(this.opt('name'));
		}
	},
	items: [{
		text: 'Диалог с нижними кнопками',
		name: 'dialog1'
	}, {
		text: 'Диалог с верхними кнопками',
		name: 'dialog2'
	}, {
		text: 'Диалог с иконкой закрытия',
		name: 'dialog3'
	}],



	onDialog1: function(){

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

	},


	onDialog2: function() {

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


	},


	onDialog3: function() {

		var dlg = new Dialog({
			cls: 'simple',
			title: title,
			$header: {
				$buttons: {
					etype: 'tool-bar',
					cls: 'fluid-right',
					defaultItem: {
						etype: 'icon-button',
						onClick: function(e) {
							this.events.rise(this.opt('name'));
						}
					},
					items: [{
						icon: 'fa-close',
						state: 'line tiny', // конка должна принципиально иметь размер tiny
						name: 'cancel'
					}]
				}
			}

		});

		dlg.open();

	}

});







