
var w = $.ergo({
	etype: 'html:form',
//	width: 800,
	as: '__gap-x2 divided',
	layout: {
		etype: 'vbox',
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
		etype: 'input',
		placeholder: 'Фамилия',
		as: 'block',
		$label: {
			etype: 'label',
			as: 'pointing-above',
			text: 'Введите значение'
		}
	}/*, {
		etype: 'box',
		cls: 'divider horizontal'
	}*/, {
		etype: 'input',
		placeholder: 'Имя',
		as: 'block',
		$label: {
			etype: 'label',
			as: 'pointing-below',
			text: 'Введите значение'
		}
	}/*, {
		etype: 'box',
		cls: 'divider horizontal'
	}*/, {
		etype: 'input',
		placeholder: 'Отчество',
		$label: {
			etype: 'label',
			as: 'pointing-left',
			text: 'Введите значение'
		}
	}/*, {
		etype: 'box',
		cls: 'divider horizontal'
	}*/, {
		etype: 'input',
		placeholder: 'Место рождения',
		$label: {
			etype: 'label',
			as: 'pointing-right',
			text: 'Введите значение'
		}
	}]
});

w.render('#sample');
