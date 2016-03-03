

var w = $.ergo({
  etype: 'box',
  include: 'selectable',
  defaultItem: {
    as: 'text action',
    // по клику создаем всплывающее событие `select`
    onClick: 'action:select',
    states: {
      // заменяем стандартный класс состояния `selected` на `blue`
      'selected': 'cls:blue'
    }
  },
  items: ['Alice', 'Bob', 'Charlie', 'Dave'],

  onSelectionChanged: function(e) {
    growl.info( e.selected.prop('text') );
  }
});


w.render('#sample');
