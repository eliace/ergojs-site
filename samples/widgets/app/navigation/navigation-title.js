

var nav = $.ergo({
	etype: 'html:nav',
	layout: 'fluid',
	cls: 'navigation underlined',
  $header: {
    etype: 'html:h3',
    cls: 'header box',
    $icon: {
      etype: 'icon',
      cls: 'fa-cogs'
    },
    $content: {
      etype: 'text',
      text: 'Приложение',
      $content: {
        etype: '.',
      },
      $subheader: {
        etype: 'text',
        cls: 'sub-header',
        text: 'Демонстрационное приложение ErgoJS'
      }
    }
  },
  $tools: {
  	etype: 'box',
  	layout: 'hbox',
  	cls: 'align-right tools __gap',
    style: {'padding': '0.5714rem 0'},
  	items: [{
  		etype: 'html:img',
  		cls: 'circular',
			src: 'img/Lil_cr.png',
  		width: 32
  	}, {
  		etype: 'text',
  		include: 'dropdown',
  		cls: 'text action',
      state: 'to-left',
      style: {'padding': '11px 0'},
  		$content: {
  			etype: '.',
  			text: 'User'
  		},
  		$caret: {
  			etype: 'icon',
  			cls: 'caret'
  		},
  		$dropdown: {
        etype: 'dropdown-menu',
  			cls: '__hover',
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

