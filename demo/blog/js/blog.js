
Ergo.require(
	'js.context',
	'js.states.feed',
	'js.widgets.feed'
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
			cls: 'app-content',
			
			$header: {
//				html: '',
				cls: 'blog-header clearfix',
				$title: {
					cls: 'pull-left blog-title',
					$content: {
						etype: 'text',
						text: 'Блог SF'
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
				etype: 'html:nav',
				cls: 'clearfix',
				$content: {
					etype: 'list',
					cls: 'nav-menu pull-right',
					defaultItem: {
						$content: {
							etype: 'html:a'
						}
					},
					items: ['Главная', 'Галерея', 'Профиль']
				}
			},
			
			$banner: {
				cls: 'blog-banner',
				$image: {
					etype: 'html:img',
					src: 'img/rising_force-wallpaper-1600x900.jpg',//build_2-wallpaper-1920x1080.jpg'
					tooltip: 'http://wallpaperswide.com'
				}
			},			
			
			$content: {
				
				layout: 'grid',
				
				pattern: [9, 3],
				
				$feed: {
					
					cls: 'feed',
					
					dynamic: true,
					
					defaultItem: {
						etype: 'feed-item'
					},
					
					data: [{
						title: 'Снятся ли андроидам электрические овцы?',
						created_at: '5 минут назад',
						comments: 12,
						text: LOREMIPSUM
					}, {
						title: 'Звездный зверь',
						created_at: 'Вчера',
						comments: 4,
						text: LOREMIPSUM_2
					}, {
						image: 'img/cosmonaut-wallpaper-960x540.jpg',
						title: 'Будет скафандр - будут и путешествия',
						created_at: '24.11.2014',
						comments: 31,
						text: LOREMIPSUM_3
					}, {
						image: 'img/asteroids_hitting_other_planets-wallpaper-960x540.jpg',
						title: 'Путешествия Тафа. Чумная Звезда',
						created_at: '16.09.2014',
						comments: 11,
						text: LOREMIPSUM_4
					}, {
						title: 'Путь на Амальтею',
						created_at: '28.09.2014',
						comments: 7,
						text: LOREMIPSUM_5
					}]
/*					
					defaultItem: {
						etype: 'panel',
						cls: 'feed-post'
					},
					
					items: [{
						title: 'Снятся ли андроидам электрические овцы?',
						$header: {
							$toolbar: {
								layout: 'fluid',
								$date: {
									etype: 'inline',
									cls: 'pull-right post-date',
									text: '5 минут назад'
								}
							}
						},
						$content: {
							$content: {
								etype: 'text',
								text: LOREMIPSUM
							},
							$readmore: {
								etype: 'link',
								text: 'Читать дальше',
								cls: 'after'
							}
						},
						$footer: {
							autoRender: true,
							$comments: {
								$content: {
									etype: 'link',
									text: '12 комментариев'
								}
							}
						}
					}]
*/					
				},
				
				$sidebar: {
					cls: 'blog-sidebar',
					etype: 'html:aside',
					$tags: {
						etype: 'panel',
						title: 'Теги',
						$content: {
							layout: 'fluid',
							defaultItem: {
								etype: 'inline',
								cls: 'tag warning',
								style: {
									'margin': 8,
									'font-size': 13
								}
							},
							items: ['SF', 'Р. Асприн', 'космос', 'сингулярность', 'Star Trek', 'Star Wars', 'Р. Хайнлайн', 'Ф. Дик']
						}
					},
					$recentComments: {
						etype: 'panel',
						title: 'Последние комментарии',
						$content: {
							dynamic: true,
							
							data: [{
								author: 'Jean Lawson',
								comment: LOREMIPSUM
							}, {
								author: 'Earl Grant',
								comment: LOREMIPSUM_2
							}, {
								author: 'Michael Carr',
								comment: LOREMIPSUM_3
							}, {
								author: 'Frank Williams',
								comment: LOREMIPSUM_4
							}],
							
							defaultItem: {
								$author: {
									etype: 'link',
									dataId: 'author'
								},
								$comment: {
									dataId: 'comment',
									binding: function(v) {
										this.opt('text', v.substr(0, 100) );
									}
								}
							}
						}
					}
				}
				
			}
			
		}
		
	});
	
	this.pages = this.app.content.content;
	
	this.app.render();
	
	this.states.set('feed');
	
});

