

$ergo.defineClass('Ergo.demo.List', {

  extends: 'Ergo.widgets.Panel',

  defaults: {

    title: 'Список',
    as: 'widget default blue',

    $header: {
  		$title: {
  			as: 'heavy padding large'
  		}
  	},

    $toolbar: {
  		as: 'padding',
  		weight: -5,
  		items: [{
  			etype: 'button',
  			include: ['icon:after'],
  			icon: 'fa-plus',
  			text: 'Добавить элемент',
  			as: 'primary flat',
        name: 'add',
  			onClick: 'rise:addItem'
  		}, {
  			etype: 'button',
  			as: 'danger +hidden',
  			name: 'delete',
  			onClick: 'rise:removeItems'
  		}]

  	},

    $content: {
  		as: 'list',

      css: {'max-height': 300},

  		defaultItem: {

  			include: ['editor-input'],

  			layout: 'hbox',

  			$checker: {
  				etype: 'check',
  				as: 'before'
  			},

  			$content: {
  				etype: 'text',
  				as: 'padding'
  			},

  			$editor: {
  				as: 'border padding fluid'
  			},

  			events: {
  				'doubleClick': 'startEdit'
  			}

  		}


  	},


  }

});







$context.section('Без связывания', '', ['list.js']);
$context.section_begin('dynamic-items');
$context.section_end('dynamic-items');




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

$context.section('Частичное связывание с данными', 'Если данные предоставляются в том виде, в котором они должны сохраняться, в них не должно быть посторонней информации');
$context.section_begin('dynamic-edit');
$context.section_end('dynamic-edit');



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

$context.section('Полное связывание с данными', 'В данных хранится и сохраняемая и временная информация');
$context.section_begin('dynamic-data');
$context.section_end('dynamic-data');


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

