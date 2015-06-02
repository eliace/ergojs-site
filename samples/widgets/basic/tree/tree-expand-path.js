
// создаем примесь
Ergo.alias('includes:expand-path', {

	overrides: {

		expand_path: function(path) {

			var path_a = path.split(':');

			if(path_a.length > 1) {

				var found = null;
				var item_name = path_a.shift();

				this.items.each(function(item) {
					if(item._name == item_name)
						found = item;
				});

				if(found) {
					found.states.set('expanded');
					found.subtree.expand_path(path_a.join(':'));
				}

			}

		}

	}

});



var w = $.ergo({
	etype: 'nested-list',
	data: tree_data,
	include: 'expand-path',	
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
			},
			format: '#{text}'
		},
		binding: function(v) {
			this.opt('name', v.text);
		},
		$subtree: {
			include: 'expand-path'
		}
	}
});

w.render('#sample');

w.expand_path('Азия:Китай');
w.expand_path('Европа:Германия:Мюнхен');

