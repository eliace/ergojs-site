

var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});





$.ergo({
	etype: 'panel',
	renderTo: '#sample',

	cls: 'widget default',

	title: 'Вложенный список',

	$content: {
		$list: {
			etype: 'nested-list',
			cls: 'tree-list hovered',
			data: data,
			nestedItem: {
				cls: 'list-item',
				$content: {
					layout: 'bar',
					cls: 'box-medium',
					style: {'display': 'block'},
					// тип элемента
					$toggler: {
						etype: 'icon',
						cls: 'fa round',
						binding: function(v) {
							this.opt('icon', v.children ? 'fa-chevron-down' : 'fa-file-text-o');
						}
					},
					// аватарка пользователя
					$avatar: {
						etype: 'html:img',
						binding: 'src',
						format: function(v) {
							var s = v.id;
							if(v.id < 10) s = '0'+s;
							if(v.id < 100) s = '0'+s;
							return 'demo/blog/img/avatars/'+s+'.jpg';
						},
						width: 48
					},
					// текстовое содержимое элемента списка
					$content: {
						etype: 'box',
						$content: {
							etype: '&text',
							dataId: 'full_name'
						},
						$email: {
							etype: 'text',
							cls: 'email',
							dataId: 'email'
						}
					}
				},
				$sub: {
					hidden: false,
					// Магия происходит тут
					events: {
						'item:added': function(e) {
							// задаем уровень вложенности элементов при композиции
							e.item._depth = (this.parent._depth || 0)+1;
						},
						'item:rendered': function(e) {
							// при отрисовке устанавливаем значение отступа
							e.item.content.el.css('padding-left', e.item._depth * 32);
						}
					}
				}
			}
		}
	}

});

data.fetch();
