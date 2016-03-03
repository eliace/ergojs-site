
$context.section('Эксклюзивная выборка (по умолчанию)', 'Событие `select` перехватывается по умолчанию и устанавливает эксклюзивное состояние `selected` выбранного элемента');
$context.section_begin('selection-basic');
$context.section_end('selection-basic');


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

$context.section('Эксклюзивная выборка (пользовательская)', 'Устанавливаем выборку с помощью объекта selection');
$context.section_begin('selection-basic-ex');
$context.section_end('selection-basic-ex');


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

$context.section('Множественная выборка', 'Имена выбранных элементов должны быть уникальны');
$context.section_begin('selection-multi');
$context.section_end('selection-multi');


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
      'selected': 'cls:blue'
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

$context.section('Событие');
$context.section_begin('selection-changed');
$context.section_end('selection-changed');


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

$context.section('Поиск элементов', 'По умолчанию для поиска выбранного элемента по ключу используется `this.item(key)`, но его можно задать явно через опцию `selection.lookup` ');
$context.section_begin('selection-lookup');
$context.section_end('selection-lookup');

var w = $.ergo({
  etype: 'box',
  include: ['selectable'],
  $content: {
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
  },
  selection: {
    lookup: function(k) {
      return this.$content.item(k);
    }
  },
});


w.render('#sample');

