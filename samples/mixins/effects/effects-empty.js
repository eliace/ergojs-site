

var w = $.ergo({
  etype: 'box',
  items: [{
    etype: 'buttons',
    layout: 'hbox',
    as: '__gap',
    items: [{
//      etype: 'button',
      text: 'Нажать',
      onClick: 'action:toggle'
    }, {
//      etype: 'button',
      text: 'Элементы',
      onClick: 'action:toggleItems'
    }]
  }, {
    include: 'effects',
    as: 'padding inverted blue box',
    style: {'display': 'none'},
    autoRender: 'non-empty'
  }],
  onToggle: function() {
    var box = this.item(1);
    if( box.el.is(':visible') ) {
      box.hide();
    }
    else {
      box.show();
    }
  },
  onToggleItems: function() {
    var box = this.item(1);
    if(box.children.is_empty()) {
      box.items.add({text: 'Alice'});
      box.items.add({text: 'Bob'});
      box._rerender();
    }
    else {
      box.item(0)._destroy();
      box.item(0)._destroy();
      box._rerender();
    }
  }
});

w.render('#sample');
