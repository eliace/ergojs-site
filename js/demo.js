

$(document).ready(function(){
	
	
	
	
	var app = $.ergo({
		etype: 'box',
		$navigation: {
			etype: 'navigation',
			title: 'PostfixAdmin',
			weight: -100,
			$content: {
				$menu: {
					etype: 'menu-bar',
					mixins: ['selectable'],
					defaultItem: {
						onClick: function() {
							$context.states.set(this._name);
						}
					},
					items: [{text: 'Mailboxes', name: 'mailboxes'},{text: 'Domains', name: 'domains'}]
				}
			}
		}
		// $content: {
// 			
		// }
	});
	
	
	
	$context.init();
	
	app.$render('body');
	
	$context.app = app;
	$context.el = app.el; //FIXME
	
	$context.states.set('mailboxes');
	
});




// контекст приложения
$context = new Ergo.core.Context({
	states: {
		'mailboxes:pages': function(on) {
			// устанавливаем пункт меню
			this.app.navigation.content.menu.opt('selected', 0);
			
			// загружаем данные
			
			// отрисовываем страницу
			this.app.components.set('content', mailboxes_page);
			this.app.$render(); // FIXME
			
		},
		'domains:pages': function(on) {
			// устанавливаем пункт меню
			this.app.navigation.content.menu.opt('selected', 1);
			
			// отрисовываем страницу
			this.app.components.set('content', domains_page);
			this.app.$render(); // FIXME
			
		}		
	}
});


$context.init = function(o) {
	
	$('body').height($(window).height());
	
	
};




var mailboxes_page = {
	etype: 'box',
	cls: 'mailboxes page',
	$content: {
		etype: 'table-grid',
		cls: 'widget',
		column: {
			$content: {
				etype: 'link',
				cls: 'column-text'
			}
		},
		columns: [{
			header: 'Name'
		}, {
			header: 'Maildir'
		}, {
			header: 'Domain'
		}, {
			header: 'Username'
		}, {
			header: 'Quota'
		}, {
			header: 'Active'
		}]
	}
};




var domains_page = {
	etype: 'box',
	cls: 'domains page',
	$content: {
		etype: 'table-grid',
		column: {
			$content: {
				etype: 'link',
				cls: 'column-text'
			}
		},
		columns: [{
			header: 'Domain'
		}, {
			header: 'Description'
		}, {
			header: 'Aliases'
		}, {
			header: 'MaxQuota'
		}, {
			header: 'Transport'
		}, {
			header: 'BackupMX'
		}, {
			header: 'Active'
		}]
	}
};




