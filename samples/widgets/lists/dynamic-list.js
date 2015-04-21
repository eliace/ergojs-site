

var w = $.ergo({
	etype: 'panel',
	renderTo: '#sample',
	
	title: 'Динамический список',
	
	cls: 'widget default',
	
	mixins: ['selectable'],
	
	selector: function(i) {
		return this.content.item(i);
	},
	
	multiselect: true,
	
	$toolbar: {
		etype: 'tool-bar',
		weight: -5,
		items: [{
			etype: 'button',
			text: 'Добавить элемент',
			state: 'primary',
			$icon: {
				etype: 'icon',
				weight: 10,
				cls: 'after',
				icon: 'fa-plus'
			},
			$content: {
				etype: '&text'
			},
			onClick: function() {
				this.events.rise('newItemDialog');
			}
		}, {
			etype: 'button',
//			text: 'Удалить элемент',
			format: function(v) {
				return 'Удалить элементы ('+v+')';
			},
			binding: 'text',
			state: 'danger',
			hidden: true,
			
			mixins: ['effects'],
			
			effects: {
				show: {type: 'fadeIn', delay: 400},
				hide: {type: 'fadeOut', delay: 400}
			},
			
			// $icon: {
				// etype: 'icon',
				// weight: 10,
				// cls: 'after',
				// icon: 'fa-ban'
			// },
			// $content: {
				// etype: 'text'
			// },
			onClick: function() {
				this.events.rise('removeItems');
			}
			
		}]
	},
	
	$content: {
		cls: 'list-box',
		dynamic: true,
		
		height: 300,
		
		data: [],
		
		
		
		defaultItem: {
//			etype: 'item-box',
			
			mixins: ['effects'],
			
			effects: {
				show: {type: 'fadeIn', delay: 400},
				hide: {type: 'fadeOut', delay: 400}
			},
			
			renderEffects: true,
			
			hidden: true,
			
			$checker: {
				etype: 'check',
				autoBind: false,
				cls: 'before',
				// onChange: function(e) {
// 					
				// }
			},
			// $icon: {
				// etype: 'icon',
				// icon: 'fa-cloud',
				// binding: false,
				// weight: -10
			// },
			$content: {
				etype: 'text',
				// $icon: {
					// etype: 'icon',
					// icon: 'fa-cog',
					// binding: false,
					// weight: -10
				// },
				// $content: {
					// etype: 'text'
				// }
			},
			
			states: {
				'selected': function(on) {
					this.checker.opt('value', on);
				}
			},
			
			
			onClick: function() {
				this.events.rise( this.states.is('selected') ? 'unselect' : 'select');
			}
			
			
			
			
			// $after: {
				// etype: 'icon-button',
				// icon: 'fa-close',
// //				cls: 'addon',
				// state: 'line tool danger tiny',
				// binding: false,
// //				autoDock: true,
			// }
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
			
			onOpen: function() {
				
				var s = this.data.get('text');
				
				$('input', this.content.el).first().focus();
				
				$('.text-box', this.content.el).ergo().cursor_position(s.length);
				
//				console.log('open');
/*
				var input = this.content.item(0).content.el;
				
				input.focus();//[0].setSelectionRange(0, 5);//.select();
//				this.content.item(0).content.el.select();
				var pos = input.val().length;
				var elem = input[0];

		    if (elem.setSelectionRange) {
		      elem.setSelectionRange(pos, pos);
		    } else if (elem.createTextRange) {
		      var range = elem.createTextRange();
		      range.collapse(true);
		      range.moveEnd('character', pos);
		      range.moveStart('character', pos);
		      range.select();
		    }
*/

			},
			
			onOk: function() {
				
				self.events.fire('addItem', {value: obj.text});
			}
			
		});
		
		
//		console.log('---1---');
		
		
		
//		dlg.render('body');
		dlg.open();

		
	},
	
	
	onAddItem: function(e) {

		this.content.data.add( e.value );
		
//		this.content._layoutChanged();
		
	},
	
	
	onRemoveItems: function() {
		
		this.selection.each(function(item) {
			item.data.del();
		});
		
		this.selection.clear();
		
	},
	
	
	onSelectionChanged: function() {

		this.toolbar.item(1).opt('value', this.selection.size());
		
		this.selection.is_empty() ? this.toolbar.item(1).hide() : this.toolbar.item(1).show();
		
	}
	
	
	
	
});
