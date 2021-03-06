
var w = $.ergo({
	etype: 'tree',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			},
			format: '#{text}'
		},
		// Указываем состояние раскрытия.
		// Но поддерево не отобразится, поскольку оно еще пусто
		state: 'expanded',	
		$sub: {
			hidden: false  // принудительно меняем видимость пустого поддерева
		}
	}
});

w.render('#sample');

