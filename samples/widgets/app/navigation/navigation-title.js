

var nav = $.ergo({
	etype: 'html:nav',
	layout: 'float',
	as: 'navigation underlined',
  $header: {
    etype: 'html:h3',
    as: 'title box',
    $icon: {
      etype: 'icon',
      as: 'fa-cogs'
    },
    $content: {
      etype: 'text',
      text: 'Приложение',
      $content: {
        etype: '.',
      },
      $subheader: {
        etype: 'text',
        as: 'sub title',
        text: 'Демонстрационное приложение ErgoJS'
      }
    }
  },
  $tools: {
  	etype: 'box',
  	layout: 'hbox',
  	as: 'align-right tools __gap',
    style: {'padding': '0.5714rem 0'},
  	items: [{
  		etype: 'html:img',
  		as: 'circular',
			src: 'img/Lil_cr.png',
  		width: 32
  	}, {
  		etype: 'text',
  		include: 'dropdown',
  		as: 'text action +to-left',
//      state: 'to-left',
      style: {'padding': '11px 0'},
  		$content: {
  			etype: '.',
  			text: 'User'
  		},
  		$caret: {
  			etype: 'icon',
  			as: 'caret'
  		},
  		$dropdown: {
        etype: 'dropdown-menu',
  			as: '__hover',
  			items: ['Профиль', 'Выход']
  		},
  		onClick: function(e) {
  			this.states.toggle('opened');
  			e.stop();
  		}
  	}]
  }
});


nav.render('#sample');
