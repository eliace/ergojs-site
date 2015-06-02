

var w = $.ergo({
	etype: 'box',
	width: 600,
	cls: 'bordered rounded paper box-large',
	style: {'margin-top': 16},
	$ribbon: {
		etype: 'label',
		cls: 'ribbon left',
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
			if(item.label) {
				item.label.options.autoRender = false;
				if(item.label.el.hasClass('ribbon'))
					w.prepend(item.label.el);
			}
			return w;
		}
	},	
	$content: {
		etype: 'html:img',
		src: 'img/galleries/space/preview/solar_2-wallpaper-1366x768.jpg',
		cls: 'width-small',
		$label: {
			etype: 'label',
			cls: 'ribbon primary left',
			text: 'Изображение',
			style: {'position': 'absolute', 'left': 'calc(-16px)', 'top': 16}
		}		
	}
});

w.render('#sample');
