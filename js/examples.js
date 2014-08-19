


$(document).ready(function(){
	
	
	var EXAMPLES = [{
		title: 'Ядро'
	}, {
		title: 'Базовые элементы',
		children: [{
			title: 'Бокс',
			name: 'basic/box'
		}, {
			title: 'Иконка'			
		}, {
			title: 'Ссылка'
		}, {
			title: 'Список'
		}, {
			title: 'Панель'
		}, {
			title: 'Таблица'
		}, {
			title: 'Текст'
		}, {
			title: 'Дерево'
		}]
	}, {
		title: 'Кнопки'
	}, {
		title: 'Поля'
	}]
	
	
	
	var w = $.ergo({
		etype: 'tree',
		id: 'content-menu',
		data: EXAMPLES,
		node: {
			$content: {
				etype: 'link',
				dataId: 'title',
				onClick: function() {
					this.parent.states.toggle('expanded');
				}
			}
		}
	});
	
	w.$render('.page-content > aside');
	
	
	
	
	var create_sample = function(title, o) {
		
		var smpl = $.ergo({
			etype: 'panel',
			cls: 'sample',
			title: title,
			$content: {
				etype: 'tab-panel',
				tabs: [{
					tab: 'Пример',
					$content: o
				}, {
					tab: 'Код'
				}]
			}
		});
		
		smpl.$render('#samples');
		
	}
	
	
	
	var load_example = function(name) {
		
	}
	
	
	
	
	create_sample('Текстовые поля', {etype: 'box', text: 'Hello'});
	
	
	
});
