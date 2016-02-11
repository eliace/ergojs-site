

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
//= require basic-buttons-footer
$context.section('Верхние кнопки');
//= require basic-buttons-header
$context.section('Иконка закрытия');
//= require basic-close-icon
$context.section('Управление заголовком');
//= require basic-header
$context.section('Загрузка html');
//= require basic-html
$context.section('Множественные диалоги');
//= require basic-multiple
$context.section('Типы');
//= require basic-type
