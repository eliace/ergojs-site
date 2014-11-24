

var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	
	$toolbar: {
		etype: 'tool-bar',
		items: [{
			etype: 'button',
			text: 'Добавить элемент',
			onClick: function() {
				this.events.rise('newItemDialog');
			}
		}]
	},
	
	$content: {
		dynamic: true,
		data: [],
		defaultItem: {
//			binding: 'text',
			layout: 'item',
			$checker: {
				etype: 'check'
			},
			$icon: {
				etype: 'icon',
				icon: 'fa-cloud',
				binding: false,
				weight: -10
			},
			$content: {
				etype: 'inline',
				$icon: {
					etype: 'icon',
					icon: 'fa-cog',
					binding: false,
					weight: -10
				},
				$content: {
					etype: 'text'
				}
			},
			$addon: {
				etype: 'icon-button',
				icon: 'fa-close',
				cls: 'addon',
				state: 'line tool danger tiny',
				binding: false,
//				autoDock: true,
			}
		}
	},
	
	
	onNewItemDialog: function() {
		
		var self = this;
		
		var obj = {text: 'Новый элемент'};
		
		var dlg = $.ergo({
			etype: 'modal-dialog',
			title: 'Добавление элемента списка',
			cls: 'dark',
			data: obj,
			effects: {
				'show': {type: 'fadeIn', delay: 400}
			},
			$content: {
				layout: 'form',
				cls: 'panel-content',
				items: [{
					etype: 'text-box',
					mixins: ['label'],
					label: 'Текст',
					width: '100%',
					dataId: 'text'
				}]
			},
			$footer: {
				state: 'right',
				$buttons: {
					items: [{text: 'ОК', state: 'primary', name: 'ok'}, {text: 'Отмена', name: 'cancel'}]
				}
			},
			
			onOpened: function() {
				console.log('open');
				this.content.item(0).content.el.focus();//[0].setSelectionRange(0, 5);//.select();
//				this.content.item(0).content.el.select();
			},
			
			onOk: function() {
				
				self.events.fire('addItem', {value: obj.text});
			}
			
		});
		
		dlg.render('body');
		dlg.open();
		
	},
	
	
	onAddItem: function(e) {

		this.content.data.add( e.value );
		
//		this.content._layoutChanged();
		
	}
	
	
	
});
