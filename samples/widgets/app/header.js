

var w = $.ergo({
	etype: 'box',
	cls: 'nav-bar',
	components: {
		header: {
			cls: 'header',
			$title: {
				cls: 'title',
				etype: 'link',
				text: 'Title'				
			}
		},
		menu: {
			etype: 'menu-bar',
			defaultItem: {
				$content: {
					etype: 'link'
				},
				set: {
					'text': function(v) {this.content.opt('text', v);}
				}
			},
			items: ['Mailboxes', 'Domains']
		},
		user: {
			cls: 'user'
		}
	}
});


w.$render('#sample');
