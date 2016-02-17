




var w = $.ergo({
	etype: 'nested-list',
	as: 'list nested hovered divide',
	data: data,
	nestedItem: {
		$content: {
			etype: 'box',
			as: 'item padding-vertical',
			// аватарка пользователя
			$avatar: {
				etype: 'html:img',
				as: 'rounded before',
				binding: 'prop:src',
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
				binding: 'prop:text',
				format: '#{full_name}',
				$content: {
					etype: '.'
				},
				$email: {
					etype: 'text',
					as: 'description',
					format: '#{email}'
				}
			}
		},
		$sub: {
			hidden: false,
			as: 'list nested hovered divide',
			// "Магия"" происходит тут
			events: {
				'item#added': function(e) {
					// задаем уровень вложенности элементов при композиции
					e.item._depth = (this.parent._depth || 0)+1;
				},
				'item#rendered': function(e) {
					// при отрисовке устанавливаем значение отступа
					e.item.$content.el.css('padding-left', e.item._depth * 32);
				}
			}
		}
	}

});


w.render('#sample');
