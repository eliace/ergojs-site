

var w = $.ergo({
  etype: 'box',
  layout: 'hbox',
  as: '__gap margin',
  defaultItem: {
    as: 'line paper',
    width: 100,
    height: 50
  },
  items: [{
    as: 'red'
  }, {
    as: 'green'
  }, {
    as: 'blue'
  }, {
    as: 'orange'
  }, {
    as: 'purple'
  }]
});

w.render('#sample');



var w = $.ergo({
  etype: 'box',
  layout: 'hbox',
  as: '__gap margin',
  defaultItem: {
    as: 'line paper',
    width: 100,
    height: 50
  },
  items: [{
    as: 'red line-left'
  }, {
    as: 'green line-top'
  }, {
    as: 'blue line-right'
  }, {
    as: 'orange line-bottom'
  }]
});

w.render('#sample');
