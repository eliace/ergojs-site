

var w = $.ergo({
	etype: 'tree',
	data: tree_data,
	nestedItem: {
		$content: {
			etype: 'link',
			onClick: function() {
				this.parent.states.toggle('expanded');
				this.events.rise('nodeExpanded');
			},
			format: '#{text}'
		},
		onNodeExpanded: function() {
			// схлапываем соседние узлы
      this.parent.items.each(function(item) {
        if(item != this && item.states.is('expanded'))
          item.states.unset('expanded');
      }.bind(this));

		}
	}
});

w.render('#sample');

