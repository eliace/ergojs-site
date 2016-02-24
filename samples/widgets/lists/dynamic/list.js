
$ergo.defineClass('Ergo.demo.List', {

  extends: 'Ergo.widgets.Panel',

  defaults: {

    title: 'Список',
    as: 'widget default blue',

    $header: {
  		$title: {
  			as: 'heavy padding large'
  		}
  	},

    $toolbar: {
  		as: 'padding',
  		weight: -5,
  		items: [{
  			etype: 'button',
  			include: ['icon:after'],
  			icon: 'fa-plus',
  			text: 'Добавить элемент',
  			as: 'primary flat',
        name: 'add',
  			onClick: 'rise:addItem'
  		}, {
  			etype: 'button',
  			as: 'danger +hidden',
  			name: 'delete',
  			onClick: 'rise:removeItems'
  		}]

  	},

    $content: {
  		as: 'list',

      css: {'max-height': 300},

  		defaultItem: {

  			include: ['editor-input'],

  			layout: 'hbox',

  			$checker: {
  				etype: 'check',
  				as: 'before'
  			},

  			$content: {
  				etype: 'text',
  				as: 'padding'
  			},

  			$editor: {
  				as: 'border padding fluid'
  			},

  			events: {
  				'doubleClick': 'startEdit'
  			}

  		}


  	},


  }

});
