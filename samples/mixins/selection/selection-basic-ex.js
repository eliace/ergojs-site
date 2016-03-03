

var w = $.ergo({
  etype: 'box',
  include: ['selectable'],
  defaultItem: {
    as: 'text action',
    // по клику создаем всплывающее событие `selectItem`
    onClick: function(e) {
      this.rise('selectItem');
      e.stop();
    },
    states: {
      'selected': 'cls:blue'
    }
  },

  items: ['Alice', 'Bob', 'Charlie', 'Dave'],

  onSelectItem: function(e) {
    this.selection.set( e.target );
  }
});


w.render('#sample');
