

var w = $.ergo({
  etype: 'box',
  include: 'selectable',
  selection: {
    multiselect: true
  },
  defaultItem: {
    as: 'text action',
    // по клику создаем всплывающее событие `clickItem`
    onClick: 'rise:clickItem',
    // заменяем стандартный класс состояния `selected` на `blue`
    states: {
      'selected': 'blue'
    }
  },

  items: ['Alice', 'Bob', 'Charlie', 'Dave'],

  onClickItem: function(e) {
    // инвертируем выборку элемента
    if( e.target.is('selected') ) {
      this.selection.unset( e.target );
    }
    else {
      this.selection.set( e.target );
    }

  }
});


w.render('#sample');
