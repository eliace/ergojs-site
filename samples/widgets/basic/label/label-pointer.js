
var w = $.ergo({
	etype: 'html:form',
	width: 800,
	layout: {
		etype: 'stack',
		wrapper: function(item) {
			var w = $('<div/>');
			w.append(item.el);
			if(item.label) {
				item.label.options.autoRender = false;
				if(item.label.el.hasClass('pointing-above') || item.label.el.hasClass('pointing-left'))
					w.append(item.label.el);
				else if(item.label.el.hasClass('pointing-below') || item.label.el.hasClass('pointing-right'))
					w.prepend(item.label.el);
			}
			return w;
		}
	},
	items: [{
		etype: 'text-box',
		placeholder: 'Фамилия',
		cls: 'box-block',
		$label: {
			etype: 'label',
			cls: 'pointing-above',
			text: 'Введите значение'
		}
	}, {
		etype: 'box',
		cls: 'divider horizontal'
	}, {
		etype: 'text-box',
		placeholder: 'Имя',
		cls: 'box-block',
		$label: {
			etype: 'label',
			cls: 'pointing-below',
			text: 'Введите значение'
		}
	}, {
		etype: 'box',
		cls: 'divider horizontal'
	}, {
		etype: 'text-box',
		placeholder: 'Отчество',
		$label: {
			etype: 'label',
			cls: 'pointing-left',
			text: 'Введите значение'
		}
	}, {
		etype: 'box',
		cls: 'divider horizontal'
	}, {
		etype: 'text-box',
		placeholder: 'Место рождения',
		$label: {
			etype: 'label',
			cls: 'pointing-right',
			text: 'Введите значение'
		}
	}]
});

w.render('#sample');

