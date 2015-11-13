

var w = $.ergo({
  etype: 'box',
  include: 'selectable',
  defaultItem: {
    as: 'text action',
    // по клику создаем всплывающее событие `select`
    onClick: function() {
      this.events.rise('select');
    },
    states: {
      // заменяем стандартный класс состояния `selected` на `blue`
      'selected': 'blue'
    }
  },
  items: ['Alice', 'Bob', 'Charlie', 'Dave']
});


w.render('#sample');
