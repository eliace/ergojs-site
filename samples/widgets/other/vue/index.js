

function Attribute(v, i) { this.dom.el.setAttribute(i, v); }


$ergo.defineClass('Ergo.widgets.Svg', {

  extends: 'Ergo.core.Widget',

  defaults: {
    tagNS: 'http://www.w3.org/2000/svg',
    defaultItem: {
      etype: 'svg'
    },
    defaultComponent: {
      etype: 'svg'
    }
  },

  props: {
    set: {
      'x': Attribute,
      'y': Attribute,
      'width': Attribute,
      'height': Attribute,
      'cx': Attribute,
      'cy': Attribute,
      'r': Attribute,
      'points': Attribute
    }
  }

}, 'widgets:svg');




$context.section('SVG Graph');
//= require svg-graph
