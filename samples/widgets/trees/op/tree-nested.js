
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
		$sub__items: ['Египет', 'Марокко', 'Кения', 'Ангола']
	}, {
		text: 'Азия',
		$sub__items: ['Китай', 'Индия', 'Иран', 'Индонезия', 'Ливия', 'Непал']
	}, {
		text: 'Европа',
		$sub__items: ['Великобритания', 'Германия', 'Италия']
	}]
});

w.render('#sample');
