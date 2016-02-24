


var w = new Ergo.demo.List({

	include: 'selectable',

	data: [],

	selection: {
		multiselect: true,
		lookup: function(i) {
			return this.$content.item(i);
		}
	},

	$toolbar: {
		autoBind: false,
		items: [{
			//
		}, {
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
				autoBind: false,
				onChange: function(e) {
					this.parent.rise( 'selectItem', this.prop('value'));
				}
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

		var obj = {text: 'Новый элемент'};

		var d = this.data.add( obj );

		var item = this.$content.item({data: d});

		item.startEdit();

	},


	onRemoveItems: function() {
		// удаляем элементы списка, которые находятся в выборке
		while( !this.selection.isEmpty() ) {
			this.selection.first().data.del();
		}
	},


	onSelectItem: function(e) {
		// при изменении выбоа элемента списка добавляем/удаляем его из выборки
		this.selection.toggle(e.target, e.$data);
	},


	onSelectionChanged: function() {
		// при изменении выборки обновляем значение кнопки удаления
		this.$toolbar.item('delete').prop('value', this.selection.count());
	}

});


w.render('#sample');
