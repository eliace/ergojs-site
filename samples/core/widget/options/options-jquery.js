

Ergo.alias('includes:input-mask', {

	_post_construct: function(o) {
		this.content.el.mask(o.mask);
	}

});


Ergo.alias('includes:input-mask-2', {

	overrides: {
		set mask(v) {
			this.content.el.mask(v);
		}
	}

});




var w = $.ergo({
	etype: 'box',
	layout: 'bar',

	items: [{
		etype: 'text-box',
		include: 'input-mask icon-addon',
		icon: 'fa-search',
		mask: '+7 (000) 000 00 00',
		placeholder: '+7 (___) _______',		
		width: 180
	}, {
		etype: 'text-box',
		include: 'icon-addon input-mask-2',
		icon: 'fa-calendar',
		mask: '00/00/00',
		placeholder: 'дд/мм/гг',
		width: 180
	}]

});

w.render('#sample');

