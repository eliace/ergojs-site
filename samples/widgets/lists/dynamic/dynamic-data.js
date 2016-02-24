

$ergo.alias('formats:countChecked', function(obj) {
  var n = 0;
  obj.forEach(function(v) {
    if(v.checked) n++;
  });
	return n;
});






var w = new Ergo.demo.List({

	data: [],

	$toolbar: {
		items: [{
		}, {
      format: '#{*|countChecked}',
      binding: function(v) {
        this.prop('text', 'Удалить элементы ('+v+')');
        this.toggle('hidden', !v);
      }
		}]


	},

	$content: {

		dynamic: true,

		defaultItem: {

			$checker: {
        dataId: 'checked'
			},

			$content: {
				binding: 'prop:text',
				dataId: 'text',
			},

			states: {
				'edit': function(on, params) {

					if(on) {
						this.$checker.set('hidden');
						this.$content.set('hidden');

						this.$editor.prop('value', this.$content.prop('value'));
					}
					else {
						this.$checker.unset('hidden');
						this.$content.unset('hidden');

						if(!params.cancel) {
							this.$content.prop('value', this.$editor.prop('value'));
						}
					}

				}
			}

		}


	},


	onAddItem: function(e) {

		var obj = {text: 'Новый элемент', checked: false};

		var d = this.data.add( obj );

		var item = this.$content.item({data: d});

		item.startEdit();

	},


	onRemoveItems: function() {

    var v = this.data.raw();

    for(var i = v.length-1; i >= 0; i--) {
      if(v[i].checked) {
        this.data.del(i);
      }
    }


		// удаляем элементы списка, которые находятся в выборке
		// while( !this.selection.isEmpty() ) {
		// 	this.selection.first().data.del();
		// }
	}

});


w.render('#sample');
