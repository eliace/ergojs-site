

var Dialog = Ergo.widgets.Panel.extend({

	defaults: {
		include: 'modal effects',
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
					state: 'contextual', // конка должна принципиально иметь размер tiny
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







