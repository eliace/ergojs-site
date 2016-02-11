
// создаем примесь
Ergo.alias('includes:expand-path', {

	expandPath: function(path, effects) {

		var path_a = path.split(':');

		if(path_a.length > 1) {

			var found = null;
			var item_name = path_a.shift();

			this.items.each(function(item) {
				if(item.prop('name') == item_name)
					found = item;
			});

			if(found) {
				if(effects === false) found.$sub._no_effects = true;
				found.set('expanded');
				found.$sub.expandPath(path_a.join(':'));
				if(effects === false) delete found.$sub._no_effects;
			}

		}

	}

});



var w = $.ergo({
	etype: 'tree',
	data: tree_data,
	include: 'expand-path',
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.toggle('expanded');
			},
			format: '#{text}'
		},
		binding: function(v) {
			this.prop('name', v.text);
		},
		$sub: {
			include: 'expand-path'
		}
	}
});

w.render('#sample');

w.expandPath('Азия:Китай', false);
w.expandPath('Европа:Германия:Мюнхен', false);
