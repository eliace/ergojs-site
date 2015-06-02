
var tree_data = [{
	text: 'Африка',
	children: [
		{text: 'Египет'},
		{text: 'Марокко'},
		{text: 'Кения'},
		{text: 'Ангола'}
	]
}, {
	text: 'Азия',
	children: [
		{text: 'Китай'},
		{text: 'Индия'},
		{text: 'Иран'},
		{text: 'Индонезия'},
		{text: 'Ливия'},
		{text: 'Непал'}
	]
}, {
	text: 'Европа',
	children: [
		{
			text: 'Великобритания',
			children: [
				{text: 'Лондон'},
				{text: 'Дублин'},
				{text: 'Ливерпуль'},
				{text: 'Бирмингем'}
			]
		},
		{
			text: 'Германия',
			children: [
				{text: 'Берлин'},
				{text: 'Мюнхен'},
				{text: 'Гамбург'}
			]
		},
		{text: 'Италия'}
	]
}]


var w = $.ergo({
	etype: 'nested-list',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			},
			format: '#{text}'
		}
	}
});

w.render('#sample');

