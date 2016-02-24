
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
				format: '#{id|avatarUrl}',
				width: 32
			},
			// текстовое содержимое элемента списка
			$content: {
				binding: 'prop:text',
				format: '#{full_name}',
				$content: {
//					etype: '.'
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
					e.item.$content.vdom.setStyle('padding-left', e.item._depth * 32);
				}
			}
		}
	}

});


w.render('#sample');
