





var dt = new Array();
    
for (var i = 0; i < 6; i++) {
     var group = {
        Name: "Group "+i,
        Filters: new Array()
    };
   for (var j = 0; j < 30; j++) {
        var filter = {
            Name: "Filter " + j,
            Values: new Array()
        };
        for (var k = 0; k < 15; k++) {
            filter.Values.push(k);
        }
        group.Filters.push(filter);
    }
    dt.push(group);
}

console.log(dt);







var w = $.ergo({
	etype: 'box',
	dynamic: true,
	data: dt,
	id: 'filters',
	defaultItem: {
		autoRender: false,
		layout: 'inherited',
		$title: {
//			weight: -10,
			etype: 'html:span',
			binding: 'text',
			format: '#{Name}',
//			dataId: 'Name',
			style: {'font-weight': 'bold'},
		},
		$content: {
			etype: 'box',
//			layout: 'inherited',
			dynamic: true,
			dataId: 'Filters',
			defaultItem: {
				cls: 'singleFilterWrapper',
				$checkbox: {
					etype: 'html:checkbox',
					dataId: 'enabled'
				},
				$label: {
					etype: 'html:label',
					dataId: 'Name',
					binding: 'text'
				},
				$selectbox: {
					etype: 'html:select',
					dynamic: true,
					dataId: 'Values'
				},
				binding: function(v) {
					this.selectbox.opt('disabled', !v.enabled);

					var id = 'check_'+this.data.source.source.get('Name')+'_'+v.Name;

					this.checkbox.opt('id', id);
					this.label.el.prop('for', id);
				}
			}
		}
	}
});


w.render('#sample');
