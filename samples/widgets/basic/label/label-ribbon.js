

var w = $.ergo({
	etype: 'box',
	width: 600,
	as: 'bordered rounded paper padding-x2',
//	style: {'margin-top': 16},
	$ribbon: {
		etype: 'label',
		as: 'ribbon left',
		text: 'Метка'
	},
	$title: {
		etype: 'text',
		style: {'display': 'inline-block'},
		text: 'Заголовок'
	},
	$content: {
		text: LOREMIPSUM,
		style: {'margin-top': 12}
	}
});

w.render('#sample');




var w = $.ergo({
	etype: 'box',
	style: {'margin-top': 16, 'position': 'relative'},
	layout: {
		wrapper: function(item) {
			var w = $('<div/>');
			w.append(item.el);
			if(item.$label) {
				item.$label.options.autoRender = false;
				if(item.$label.el.hasClass('ribbon'))
					w.prepend(item.$label.el);
			}
			return w[0];
		}
	},
	$content: {
		etype: 'html:img',
		src: 'img/galleries/space/preview/solar_2-wallpaper-1366x768.jpg',
		as: 'width-small',
		$label: {
			etype: 'label',
			as: 'ribbon primary left',
			text: 'Изображение',
			style: {'position': 'absolute', 'left': 'calc(-16px)', 'top': 16}
		}
	}
});

w.render('#sample');
