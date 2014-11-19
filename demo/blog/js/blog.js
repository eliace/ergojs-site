
Ergo.require(
	'js.context',
	'js.states.feed'
);



$context.ready(function() {
	
	this.app = $.ergo({
		etype: 'box',
		html: $('body'),
				
		
		$content: {
			cls: 'app-content',
			
			$header: {
				html: '<nav/>',
				$title: {
					cls: 'pull-left',
					$content: {
						etype: 'text',
						text: 'Блог'
					},
					$subtitle: {
						text: 'Демонстрационное приложение'
					}
				},
				$search: {
					etype: 'text-box',
					placeholder: 'Поиск',
					cls: 'pull-right'
				}
			},
			
			$menu: {
				
			},
			
			$content: {
				
			}
			
		}
		
	});
	
	this.pages = this.app.content.content;
	
	this.app.render();
	
	this.states.set('feed');
	
});

