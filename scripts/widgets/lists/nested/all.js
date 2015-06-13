
var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});



$context.section('Динамический расчет отступа');
$context.section_begin('nested-basic');
$context.section_end('nested-basic');





var w = $.ergo({
	etype: 'nested-list',
	cls: 'list nested hovered divide',
	data: data,
	nestedItem: {
		$content: {
			etype: 'box',
			cls: 'item padding-vertical',
			// аватарка пользователя
			$avatar: {
				etype: 'html:img',
				cls: 'rounded before',
				binding: 'src',
				format: function(v) {
					var s = v.id;
					if(v.id < 10) s = '0'+s;
					if(v.id < 100) s = '0'+s;
					return 'demo/blog/img/avatars/'+s+'.jpg';
				},
				width: 32
			},
			// текстовое содержимое элемента списка
			$content: {
				$content: {
					etype: '.',
					dataId: 'full_name'
				},
				$email: {
					etype: 'text',
					cls: 'description',
					dataId: 'email'
				}
			}
		},
		$subtree: {
			hidden: false,
			cls: 'list nested hovered divide',
			// "Магия"" происходит тут
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

});


w.render('#sample');




data.fetch();