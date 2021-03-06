

var Dialog = Ergo.widgets.Panel.extend({

	defaults: {
		include: 'modal effects',
		effects: {
			show: {type: 'fadeIn', delay: 300}
		},
		as: 'modal paper',
		renderTo: 'body',
		destroyOnClose: true,
		closeOn: 'outerClick',
		width: 700,
//		height: 300,
		$content: {
//			cls: 'panel-content',
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
			layout: 'float',
			$buttons: {
				etype: 'box',
				cls: 'align-right tools',
				defaultItem: {
					etype: 'icon',
					onClick: function(e) {
						this.rise(this.opt('name') || 'action');
					}
				},
				items: [{
					icon: 'close',
					state: 'contextual action',
					name: 'cancel'
				}]
			}
		},

	}

});







$context.section('Нижние кнопки');
$context.section_begin('basic-buttons-footer');
$context.section_end('basic-buttons-footer');


var dlg = new Dialog({
	as: 'simple padded center',
	title: 'Диалог',
	destroyOnClose: false,
	$footer: {
		$buttons: {
			etype: 'box',
			layout: 'hbox',
			as: '__center __gap',
			defaultItem: {
				etype: 'button',
				onClick: function(e) {
					this.rise(this.opt('name'));
				}
			},
			items: [{
				as: 'primary',
				text: 'ОК',
				name: 'ok'
			}, {
				as: 'default',
				text: 'Отмена',
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

$context.section('Верхние кнопки');
$context.section_begin('basic-buttons-header');
$context.section_end('basic-buttons-header');

var dlg = new Dialog({
	as: 'simple padded center',
	title: 'Диалог',
	$header: {
		layout: 'float',
		as: 'padding',
		$buttons: {
			etype: 'box',
			layout: 'hbox',
			as: 'align-right __gap',
			defaultItem: {
				etype: 'button',
				onClick: function(e) {
					this.rise(this.opt('name'));
				}
			},
			items: [{
				as: 'primary',
				text: 'ОК',
				name: 'ok'
			}, {
				as: 'default',
				text: 'Отмена',
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

$context.section('Иконка закрытия');
$context.section_begin('basic-close-icon');
$context.section_end('basic-close-icon');

var dlg = new Dialog({
	as: 'simple center padded',
	title: 'Диалог',
	$header: {
		layout: 'float',
		$buttons: {
			etype: 'box',
			as: 'align-right tools',
			defaultItem: {
				etype: 'icon',
				as: 'contextual action',
				onClick: function(e) {
					this.rise(this.opt('name'));
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

$context.section('Управление заголовком');
$context.section_begin('basic-header');
$context.section_end('basic-header');


var dlg = new DialogX({
	as: 'simple center padded',
	title: 'Диалог',
	$content: {
		text: 'Нажмите на кнопку для смены заголовка'
	},
	$footer: {
		$buttons: {
			etype: 'box',
			layout: 'hbox',
			as: '__center __gap',
			defaultItem: {
				etype: 'button',
				onClick: function(e) {
					this.rise(this.options.name || 'action');
				}
			},
			items: ['Заголовок 1', 'Заголовок 2']
		}
	},

	onAction: function(e) {
		this.opt('title', e.target.opt('text'));
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

$context.section('Загрузка html');
$context.section_begin('basic-html');
$context.section_end('basic-html');

var dlg = new DialogX({
	as: 'simple center padded',
	title: 'Диалог',
	$content: {
		text: 'Сюда будет загружен HTML',
		height: 'auto'
	}
});


dlg.load = function() {

	var d = this;

	setTimeout(function() {
		d.$content.el.load('data/info.html', function(){
//			d.resize();
		});
	}, 1500);

};



$.ergo({
	etype: 'button',
	renderTo: '#sample',
	dialog: dlg,
	text: 'Диалог',
	onClick: function() {
		this.options.dialog.open();
		this.options.dialog.load();
	}
});

$context.section('Множественные диалоги');
$context.section_begin('basic-multiple');
$context.section_end('basic-multiple');


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

$context.section('Типы');
$context.section_begin('basic-type');
$context.section_end('basic-type');


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

