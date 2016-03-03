
var TextFilter = function(item) {
  var s = this.opt('filter');
  if(!s) return true;
  var v = item.opt('text');
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};




var select = $.ergo({
	etype: 'select',
	as: 'multi',

  selection: {
    multiselect: true
  },

//	$labels: {
	defaultItem: {
//		style: {'display': 'inline-block', 'vertical-align': 'middle', 'margin-left': 4, 'float': 'left', 'margin-top': 3, 'margin-bottom': 3},
//		etype: 'label',
		as: 'label',
    // $content: {
    //   etype: '.'
    // },
		$icon: {
			etype: 'icon',
			weight: 10,
			as: 'contextual action after +close',
			onClick: 'action:delete'
		},
    onDelete: 'action:removeSelect'
		// onDelete: function() {
		// 	this._destroy();
		// }
	},
//	items: ['hello', 'goodbye'],
//	},
	$content: {
		etype: 'edit',
    include: ['user-input'],
		weight: 5,
	},

	$dropdown: {
		items: COUNTRIES,
    renderFilter: TextFilter
	},

/*
	binding: function(v) {

    if(!v) return;

    for(var i = 0; i < v.length; i++) {
      var selected = this.selection.get(v[i]);
      if(!selected) {

        var selected = this.selection.set( v[i] );

        this.$content.opt('text', '');
        this.$dropdown.opt('filter', '');
//        this.$dropdown.opt('renderFilter', textFilter.bind(this, ''));
      }

    }

	},
*/

  // get: {
  //   'value': function() {
  //     return this.selection.get();
  //   }
  // },



	onClick: 'action:dropdown',

	onSelect: function(e) {
		this.$content.dom.el.focus();
	},

  onDropdown: function(e) {
		this.$content.dom.el.focus();
	},

	onInput: $ergo.debounce(function(e) {

    this.$dropdown.opt('filter', e.text)._rerender();

		this.toggle('opened', !(!e.text));

	}, 300),

  onChangeSelect: function(e) {

    var k = e.target.opt('name');

//    var selected = this.selection.set(k);

    this.items.add({text: e.target.opt('text'), name: e.target.opt('name')}).render();



//    console.log('select', this.value);

    // var v = this.value || [];
    //
    //
    // v.push(k);
    //
    // this.value = v;//opt('value', v);

    // сбрасываем фильтр
    this.$content.opt('text', '');
    
//    this.$dropdown.opt('filter', '')._rerender();

    this.unset('opened');

    this.$content.dom.el.focus();


    e.interrupt();
  },



  // onAddSelect: function(e) {
  // },

  onRemoveSelect: function(e) {

    var k = (e.key == null) ? e.target.opt('name') : e.key;

    this.selection.unset(k);

    e.target._destroy();




    // var v = this.opt('value') || [];
    //
    // Ergo.remove(v, k);
    //
    // this.opt('value', v);
//
//     this.selection.unset(k);
  }

});


select.render('#sample');
