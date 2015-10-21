
var w = $.ergo({
	etype: 'box',
	data: {qty: 1, cost: 2},
	layout: 'form',
	items: [{
		etype: 'html:text-input',
		type: 'number',
		dataId: 'qty',
		label: 'Количество'
	}, {
		etype: 'html:text-input',
		type: 'number',
		dataId: 'cost',
		label: 'Цена'
	}, {
		$label: {
			etype: 'html:b',
			text: 'Итог: '
		},
		$content: {
			etype: '.',
			binding: function(v) {
				this.opt('text', "$" + (v.qty * v.cost));
			}
		}
	}]

});


w.render('#sample');
