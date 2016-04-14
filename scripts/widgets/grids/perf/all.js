
$context.section('1500');
// require perf-1500
$context.section('Timeline');
$context.section_begin('perf-timeline');
$context.section_end('perf-timeline');


var COLUMNS = [{
  header: 'User',
  binding: 'prop:text',
  format: '#{full_name}',
  width: 180
}];

for(var i = 1; i < 31; i++) {
  COLUMNS[i] = {
    header: ''+i,
//		dataId,
//		binding: 'prop:text'
  }
}

JsonAjaxProvider = {
	findAll: function(source) {
		return $.ajax(source.options.url, {
			data: source.options.query,
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({provider: JsonAjaxProvider, url: 'data/mock-100.json'});

data.fetch();




var w = $ergo({
  etype: 'box',
  height: 400,
  data: data,
  layout: 'hbox',
  as: 'border',
  items: [{
    width: 180,
    autoHeight: 'ignore-siblings',
    style: {
      'overflow-x': 'hidden',
    },
    as: 'border-right',
    $content: {
      etype: 'table-grid',
      as: 'table grid single-line celled',

      rendering: function() {
        this.dom.setStyle({'margin-right': -18, 'padding-bottom': 17});
      },
      // style: {
      //   'margin-right': -17
      // },
      column: {
    		components: {
    			content: {
    				etype: 'text',
    				as: 'column-text',
    			}
    		},
    		autoBind: false
    	},
      columns: COLUMNS.slice(0,1),
      $content: {
        events: {
          'jquery:scroll': function(e) {
            if(!this._noScroll)
              this.rise('scrollFrozen', {scrollTop: this.el.scrollTop()});
            this._noScroll = false;
          }
        }
      }
    }
  }, {
    autoWidth: true,
//    width: 600,
    autoHeight: 'ignore-siblings',
    style: {
      'overflow-y': 'hidden',
      'overflow-x': 'auto'
    },
    $content: {
      etype: 'table-grid',
      as: 'table grid single-line celled',
//      width: 2000,
      // style: {
      //   'padding-right': 17
      // },
      column: {
    		components: {
    			content: {
    				etype: 'text',
    				as: 'column-text',
    			}
    		},
    		autoBind: false
    	},
      columns: [{
//        header: 'User',
        binding: 'prop:text',
        format: '#{full_name}',
        width: 0
      }].concat(COLUMNS.slice(1)),
      $header: {
        $content: {
          width: 2000
        }
      },
      $content: {
        $content: {
          width: 2000
        },
        events: {
          'jquery:scroll': function(e) {
            if(!this._noScroll)
              this.rise('scrollContent', {scrollTop: this.el.scrollTop(), scrollLeft: this.el.scrollLeft()});
            this._noScroll = false;
          }
        }

//        autoHeight: false
//        width: '100%'
        // style: {
        //   'overflow-y': 'visible'
        // }
      }
    }
  }],

  onScrollContent: function(e) {
      this.item(0).$content.$content._noScroll = true;
      this.item(0).$content.$content.el.scrollTop(e.scrollTop);

      this.item(1).$content.$header.$content.el.css('margin-left', -e.scrollLeft);
  },

  onScrollFrozen: function(e) {
    this.item(1).$content.$content._noScroll = true;
    this.item(1).$content.$content.el.scrollTop(e.scrollTop);
  }

});



/*
var w = $.ergo({
	etype: 'table-grid',
  as: 'table box grid single-line celled',

  style: {
    'position': 'relative'
  },

  height: 400,
  width: 2000,

	column: {
		components: {
			content: {
				etype: 'text',
				as: 'column-text',
			}
		},
		autoBind: false
	},
  columns: COLUMNS,
	data: data,

  $frozen: {
    as: 'frozen-grid',
    style: {
      'position': 'absolute',
      'top': 0,
      'overflow-x': 'hidden'
    },
    etype: 'table-grid',
//    height: 400,
    autoHeight: 'ignore-siblings',
    columns: [COLUMNS[0]],
    // $content: {
    //   style: {'overflow-y': 'hidden'}
    // }
  }

});
*/

w.render('#sample');

