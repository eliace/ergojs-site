

var Dialog = Ergo.widgets.Panel.extend({

	defaults: {
		mixins: ['modal', 'effects'],
		effects: {
			show: {type: 'fadeIn', delay: 300}
		},
		cls: 'modal widget',
		renderTo: 'body',
		destroyOnClose: true,
		closeOn: 'outerClick',
		width: 600,
//		height: 300,
		$content: {
			cls: 'panel-content',
			height: 100
//			autoHeight: true
		},

		onOk: function() {
			this.close();
		},

		onCancel: function() {
			this.close();
		}

	}


});



var DialogX = Dialog.extend({

	defaults: {
		
		$header: {
			$buttons: {
				etype: 'tool-bar',
				cls: 'fluid-right',
				defaultItem: {
					etype: 'icon-button',
					onClick: function(e) {
						this.events.rise(this.options.name || 'action');
					}
				},
				items: [{
					icon: 'fa-close',
					state: 'line tiny', // конка должна принципиально иметь размер tiny
					name: 'cancel'
				}]
			}
		},

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
		text: 'Нижние кнопки',
		name: 'dialog1'
	}, {
		text: 'Верхние кнопки',
		name: 'dialog2'
	}, {
		text: 'Иконка закрытия',
		name: 'dialog3'
	}, {
		text: 'Управление заголовком',
		name: 'dialog4'
	}, {
		text: 'Загрузка html',
		name: 'dialog5'
	}, {
		text: 'Множественные диалоги',
		name: 'dialog6'
	}, {
		text: 'Типы диалогов',
		name: 'dialog7'
	}],



	onDialog1: function(){

		var dlg = new Dialog({
			cls: 'simple',
			title: 'Диалог',
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
			title: 'Диалог',
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
			title: 'Диалог',
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

	},


	onDialog4: function() {

		var dlg = new DialogX({
			cls: 'simple',
			title: 'Диалог',
			$content: {
				text: 'Нажмите на кнопку для смены заголовка'
			},
			$footer: {
				autoRender: true,
				$buttons: {
					layout: 'bar',
					cls: 'bar-right',
					defaultItem: {
						etype: 'button',
						onClick: function(e) {
							this.events.rise(this.options.name || 'action');
						}
					},
					items: ['Заголовок 1', 'Заголовок 2']
				}
			},

			onAction: function(e) {
				this.opt('title', e.target.opt('text'));
			}


		});

		dlg.open();

	},



	onDialog5: function() {

		var dlg = new DialogX({
			cls: 'simple',
			title: 'Диалог',
			$content: {
				text: 'Сюда будет загружен HTML',
				height: 'auto'
			}
		});

		setTimeout(function() {
			dlg.content.el.load('data/info.html', function(){
				dlg.resize();
			});

			// var h0 = dlg.content.el.outerHeight();

			// dlg.content.el.load('data/info.html', function(){
			// 	var w = dlg.content.el.outerWidth();
			// 	var h = dlg.content.el.outerHeight();

			// 	dlg.content.el.height( h0 );

			// 	dlg.content.el.children().hide();

			// 	dlg.resize(w, h, 'content')
			// 		.then(function(){
			// 			dlg.content.el.children().fadeIn();
			// 		});
			// });

		}, 1500);

		dlg.open();

	},



	onDialog6: function() {

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

		var dlg = new MyDialogX();
		dlg.open();


	},



	onDialog7: function() {

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
					layout: 'bar',
					cls: 'bar-right',
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

		dlg.open();


	}



});







