
var textFilter = function(s, item) {
  var v = item.opt('text');
  return v && v.toLowerCase().indexOf(s.toLowerCase()) > -1;
};




var select = $.ergo({
	etype: 'select',
	as: 'multi',
  selection: {
    multiselect: true
  },

//  data: [],
//	$labels: {
	defaultItem: {
//		style: {'display': 'inline-block', 'vertical-align': 'middle', 'margin-left': 4, 'float': 'left', 'margin-top': 3, 'margin-bottom': 3},
//		etype: 'label',
		as: 'label',
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
    include: 'user-input',
		weight: 5,
	},
	$dropdown: {
		items: COUNTRIES
	},


	binding: function(v) {

    for(var i = 0; i < v.length; i++) {
      var selected = this.selection.get(v[i]);
      if(!selected) {

        var selected = this.selection.set( v[i] );

        this.$content.opt('text', '');
        this.$dropdown.options.renderFilter = textFilter.curry('');
      }

    }

	},

	onClick: 'action:dropdown',

	// onChange: function(e) {
	// 	this.items.add(e.text).render();
	// 	this.$content.opt('text', '');
	// },
	onSelect: function(e) {
		this.$content.el.focus();
		// this.opt('value', e.target.opt('name'));
		// e.stop(true);
	},

	onInput: function(e) {
		this.$dropdown.filter( 'render', textFilter.curry(e.text) );
		this.states.toggle('opened', !(!e.text));
	}.debounce(300),

	onDropdown: function(e) {
		this.$content.el.focus();
		// this.$dropdown._rerender();
		// this.states.set('opened');
//		e.stop(true);
	},

  onChangeSelect: function(e) {

    var k = e.target.opt('name');

//    var selected = this.selection.set(k);

    this.items.add({text: e.target.opt('text'), name: e.target.opt('name')}).render();


    var v = this.opt('value') || [];

    v.push(k);

    // this.selection.each(function(sel) {
    //   v.push( sel.opt('name') );
    // });

    this.opt('value', v);

    this.states.unset('opened');

    e.interrupt();
  },


  // onAddSelect: function(e) {
  // },

  onRemoveSelect: function(e) {

    var k = (e.key == null) ? e.target.opt('name') : e.key;

    this.selection.unset(k);

    e.target._destroy();


    var v = this.opt('value') || [];

    Ergo.remove(v, k);

    this.opt('value', v);
//
//     this.selection.unset(k);
  }

});


select.render('#sample');
