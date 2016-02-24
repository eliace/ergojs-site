



var w = new Ergo.demo.List({

	include: 'selectable',

	selection: {
		multiselect: true,
		lookup: function(i) {
			return this.$content.item(i);
		}
	},

	$content: {

		defaultItem: {

			$checker: {
				onChange: function(e) {
					this.parent.rise( 'selectItem', this.prop('value'));
				}
			},

			states: {
				'edit': function(on, params) {

					if(on) {
						this.$checker.set('hidden');
						this.$content.set('hidden');

						this.$editor.prop('value', this.$content.prop('text'));
					}
					else {
						this.$checker.unset('hidden');
						this.$content.unset('hidden');

						if(!params.cancel) {
							this.$content.prop('text', this.$editor.prop('value'));
						}
					}

				}
			}

		}


	},


	onAddItem: function(e) {

    var item = this.$content.items.add({
      $content: {
        text: 'Новый элемент'
      }
    });

    this.$content.render();

		item.startEdit();

	},


	onRemoveItems: function() {
		// удаляем элементы списка, которые находятся в выборке
		while( !this.selection.isEmpty() ) {
			this.selection.first()._destroy();
		}
	},


	onSelectItem: function(e) {
		// при изменении выбоа элемента списка добавляем/удаляем его из выборки
		this.selection.toggle(e.target, e.$data);
	},


	onSelectionChanged: function() {
		// при изменении выборки обновляем значение кнопки удаления
    var n = this.selection.count();
    var delBtn = this.$toolbar.item('delete');

    delBtn.prop('text', 'Удалить элементы ('+n+')');
    delBtn.toggle('hidden', !n);
	}

});


w.render('#sample');
