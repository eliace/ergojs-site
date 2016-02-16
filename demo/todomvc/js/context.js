

var KEY_ESC = 27;
var KEY_ENTER = 13;




$ergo.alias('formats:countActive', function(v) {
  return $ergo.filter(v, function(item) { return !item.completed; }).length;
});

$ergo.alias('formats:countCompleted', function(v) {
  return $ergo.filter(v, function(item) { return item.completed; }).length;
});

$ergo.alias('formats:allCompleted', function(v) {
  return $ergo.filter(v, function(item) { return item.completed; }).length == v.length;
});

$ergo.alias('formats:pluralizeItem', function(v) {
  return pluralize('item', v);
});



$ergo.alias('providers:localStorage', {

  storeKey: 'todomvc.ergojs',

  findAll: function(ds) {
    var json = JSON.parse( window.localStorage.getItem(this.storeKey) ) || {};
    return $.when( json[ds.options.storeId] || [] );
  },

  update: function(ds) {
    var json = JSON.parse( window.localStorage.getItem(this.storeKey) ) || {};
    json[ ds.options.storeId ] = ds.get();
    window.localStorage.setItem(this.storeKey, JSON.stringify(json));
    return $.when( true );
  }


});


$ergo.alias('includes:editor:input', {

  defaults: {
    editor: {
      tag: 'input',
      binding: 'text',
//      etype: 'html:input',
      events: {
        'vdom:keydown': function(e) {
          if( e.keyCode == KEY_ESC )
            this.parent.cancelEdit();
          else if( e.keyCode == KEY_ENTER ) {
            this.prop('value', this.prop('text'));
            this.parent.stopEdit();
          }
        },
        'vdom:click': function(e) {
          e.stopPropagation();
        }
        // 'jquery:change': function() {
        //   this.events.fire('change', {value: this.el.val()});
        // },
        // 'jquery:keydown': function(e) {
        //   this.events.fire('keyDown', {keyCode: e.keyCode, value: this.el.val()});
        // }
      },

      set: {
        'text': function(v) { this.vdom.el.value = v; }
      },
      get: {
        'text': function(v) { return this.vdom.el.value; }
      }

      // onClick: function(e) {
      //   e.stop();
      // },
      // onKeyDown: function(e) {
      //   if( e.keyCode == KEY_ESC )
      //     this.parent.cancelEdit();
      //   else if( e.keyCode == KEY_ENTER ) {
      //     this.value = e.value;//.opt('value', e.value);
      //     this.parent.stopEdit();
      //   }
      // }
    }
  },

  // props: {
  // },


  startEdit: function(data) {

    var w = this;

    this.components.set('editor', this.options.editor);

    this.set('editing');

//        this.$content.unrender();

    this.$editor.render()
    this.$editor.el.focus();
      // .then(function() {
      //   w.$editor.el.focus();
      // });

    $('html').one('click', function() {
      if(w.is('editing'))
        w.cancelEdit();
//          w.events.rise('cancelEdit');
    });


    this.$editor.bind( data );

//      this.events.rise('beginEdit');
  },


  stopEdit: function() {

    this.rise('stopEdit', {value: this.$editor.data.get()} );

    this.$editor._destroy();
    this.unset('editing');

  },


  cancelEdit: function() {

    this.rise('cancelEdit');

    this.$editor._destroy();
    this.unset('editing');

  }

});






$context = new Ergo.core.Context({
//  include: 'history router',
//   events: {
//     'scopeRestore': function(e) {
// //      this.to(e.hash);
//       console.log('restore');
//       e.stop(true);
//     }
//   }
});
