

var w = $.ergo({
  etype: 'box',
  include: 'selectable',
  defaultItem: {
    as: 'text action',
    // по клику создаем всплывающее событие `select`
    onClick: function(e) {
      this.rise('select');
      e.stop();
    },
    states: {
      // заменяем стандартный класс состояния `selected` на `blue`
      'selected': 'cls:blue'
    }
  },
  items: ['Alice', 'Bob', 'Charlie', 'Dave']
});


w.render('#sample');
