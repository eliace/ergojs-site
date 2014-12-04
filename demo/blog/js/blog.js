
Ergo.require(
	'js.context',
	'js.states.feed',
	'js.states.gallery',
	'js.states.profile',
	'js.widgets.feed',
	'js.widgets.media',
	'js.widgets.comment'
);



var LOREMIPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra dignissim nisl at fermentum. Donec id nisl ut ligula consectetur fermentum at vel urna. Mauris orci tellus, ullamcorper non malesuada eu, aliquet a diam. Phasellus nibh quam, interdum et egestas sit amet, eleifend in augue. Aliquam elementum libero quis est sodales auctor. Suspendisse ac dignissim mauris. Suspendisse scelerisque tristique molestie. Maecenas et tellus nulla. Duis gravida mauris et mi porta, eu scelerisque dolor placerat.';
var LOREMIPSUM_2 = 'Donec elementum convallis lacus, nec accumsan arcu placerat nec. Integer dapibus lectus at eros ullamcorper malesuada. Suspendisse potenti. Aenean magna quam, bibendum sit amet mi mollis, convallis scelerisque velit. Aliquam ac tempor eros. Vestibulum venenatis neque vitae venenatis sodales. Suspendisse lobortis nec lorem a consequat. Proin lorem ante, pharetra finibus urna sit amet, commodo sollicitudin risus.';
var LOREMIPSUM_3 = 'Praesent dapibus nunc id quam pellentesque sagittis. Nam scelerisque ut dui in cursus. Morbi fringilla, tellus nec finibus rutrum, ex purus posuere tortor, vitae sodales mi ipsum eu ipsum. Aenean et tristique ex. Vestibulum non tellus id augue dapibus malesuada nec sit amet nisi. Maecenas sed velit vel enim maximus interdum ac nec lectus. In et ante ullamcorper felis sagittis tincidunt eu et magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam vulputate consectetur mauris nec ultricies. Mauris accumsan quam ut dolor porta placerat. Nulla lobortis viverra enim et ornare. Maecenas ullamcorper dignissim odio ut eleifend. Quisque bibendum ornare libero id hendrerit. ';
var LOREMIPSUM_4 = 'Aliquam erat volutpat. Vivamus eu leo odio. Sed a massa ac sem condimentum rhoncus vel at risus. Integer tincidunt ultricies risus sed luctus. Vestibulum tincidunt dolor a ante consectetur interdum. Sed ut sapien bibendum, congue turpis non, convallis diam. Aliquam mollis, quam non interdum egestas, libero lectus lobortis mauris, vitae tempor nibh diam nec nisi. Sed dolor nulla, molestie nec neque eget, venenatis tristique leo. Phasellus non scelerisque eros, non blandit metus. ';
var LOREMIPSUM_5 = 'Suspendisse et sem ac enim semper dapibus sed a risus. Duis vel tellus ligula. Fusce posuere venenatis tellus, vitae tempor lacus pellentesque ac. Proin sit amet pretium lorem. Cras in commodo sem. Proin dolor mi, lacinia nec lectus et, volutpat dapibus arcu. Proin accumsan tortor varius mi feugiat, nec sodales metus lacinia. Duis euismod sollicitudin maximus. Fusce ut lectus libero. Aenean lobortis interdum justo, at fringilla metus ultricies vel. Sed at massa tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam at iaculis nisl. Cras sit amet molestie augue. Donec convallis malesuada sem, nec mollis risus faucibus at. ';




$context.ready(function() {
	
	this.app = $.ergo({
		etype: 'box',
		html: $('body'),
				
		
		$content: {
			cls: 'app-content paper',
			
			$header: {
//				html: '',
				cls: 'blog-header clearfix',
				$title: {
					cls: 'pull-left blog-title',
//					$content: {
//						etype: 'text',
					$content: {
						etype: '&text',
						text: 'Блог о '
					},
					$sf: {
						etype: 'html:a',
						text: '[Science Fiction]'
//						}
					},
					$subtitle: {
						text: 'Демонстрационное приложение ErgoJS'
					}
				},
				$search: {
					etype: 'text-box',
					placeholder: 'Поиск',
					width: 180,
					cls: 'pull-right',
					$after: {
						etype: 'icon',
						cls: 'addon',
						state: 'fa fa-search'
					}
				}
			},

			$menu: {
				etype: 'html:nav',
				cls: 'clearfix',
				
				mixins: ['selectable'],
				
				$content: {
					etype: 'list',
					cls: 'nav-menu pull-right',
					defaultItem: {
						$content: {
							etype: 'html:a'
						},
						events: {
							'jquery:mousedown': function(e) {
								if(e.button == 0) {
									$context.states.set( this.opt('name') );													
								}
							}
						}
					},
					items: [{text: 'Главная', name: 'feed'}, {text: 'Галерея', name: 'gallery'}, {text: 'Профиль', name: 'profile'}]
				},
				
				selector: function(key) {
					return this.content.item(key);
				},
				
				set: {
					'index': function(v) {
						this.selection.set(v);
					}
				}
				
			},
			
			
		},
		
		
		$footer: {
			cls: 'app-footer',
			items: [{
				$text: {
					etype: '&text',
					text: '©Copyright'
				},
				$link: {
					etype: 'link',
					cls: 'after',
					text: 'ErgoJS',
					href: 'http:/ergojs.com'
				}
			}, {
				$text: {
					etype: '&text',
					text: 'Изображения взяты с'
				},
				$link: {
					etype: 'link',
					cls: 'after',
					text: 'wallpaperswide.com',
					href: 'http://wallpaperswide.com'
				}				
			}]
		}
		
	});
	
	this.pages = this.app.content;
	this.menu = this.app.content.menu;
//	this.banner = this.app.content.banner;
	
	this.app.render();
	
	this.states.set('feed');
	
});

