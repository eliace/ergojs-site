
var w = $.ergo({
	etype: 'tree',
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			}
		}
	},
	items: [{
		text: 'Африка',
		$sub_items: ['Египет', 'Марокко', 'Кения', 'Ангола']
	}, {
		text: 'Азия',
		$sub_items: ['Китай', 'Индия', 'Иран', 'Индонезия', 'Ливия', 'Непал']
	}, {
		text: 'Европа',
		$sub_items: ['Великобритания', 'Германия', 'Италия']
	}]
});

w.render('#sample');

