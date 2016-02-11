

var w = $.ergo({
	etype: 'tree',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.toggle('expanded');
				this.rise('nodeExpanded');
			},
			format: '#{text}'
		},
		onNodeExpanded: function() {
			// схлапываем соседние узлы
      this.parent.items.each(function(item) {
        if(item != this && item.is('expanded')) {
          item.unset('expanded');
				}
      }.bind(this));

		}
	}
});

w.render('#sample');
