
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
		},
		// Указываем состояние раскрытия.
		// Но поддерево не отобразится, поскольку оно еще пусто
		state: 'expanded',	
		$subtree: {
			hidden: false  // принудительно меняем видимость пустого поддерева
		}
	}
});

w.render('#sample');

