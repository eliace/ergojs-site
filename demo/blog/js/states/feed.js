

$context.state('feed:page', function(on, params) {
	
	if(!on) {
		return;
	}
	
	
	$context.menu.opt('index', 'feed');
	
	
	
	var posts = [{
		title: 'Снятся ли андроидам электрические овцы?',
		author: 'Филип Дик',
		created_at: '5 минут назад',
		comments: 12,
		text: LOREMIPSUM
	}, {
		title: 'Звездный зверь',
		author: 'Роберт Э. Хайнлайн',
		created_at: 'Вчера',
		comments: 4,
		text: LOREMIPSUM_2
	}, {
		image: 'img/destiny_europa-wallpaper-960x540.jpg',
		author: 'Генри Пайпер',
		title: 'Четырехдневная планета',
		created_at: '24.11.2014',
		comments: 31,
		text: LOREMIPSUM_3
	}, {
		image: 'img/asteroids_hitting_other_planets-wallpaper-960x540.jpg',
		author: 'Джордж Мартин',
		title: 'Путешествия Тафа. Чумная Звезда',
		created_at: '16.09.2014',
		comments: 11,
		text: LOREMIPSUM_4
	}, {
		title: 'Путь на Амальтею',
		author: 'Аркадий и Борис Стругацкие',
		created_at: '28.09.2014',
		comments: 7,
		text: LOREMIPSUM_5
	}];
	
	
	
	
	
	var page = $.ergo({
		
		etype: 'box',
		
		
		
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
			
			$pages: {

				cls: 'feed',
				
				dynamic: true,
				
				defaultItem: {
					etype: 'feed-item'
				},
				
				data: posts,
				
				
				$pagination: {
					etype: 'html:ul',
					cls: 'pager',
					layout: 'fluid',
					weight: 10,
					$prev: {
						etype: 'html:li',
						hidden: true,
						cls: 'pull-left',
						$content: {
							etype: 'html:a',
							text: '← Новые записи',
						}
					},
					$next: {
						etype: 'html:li',
						cls: 'pull-right',
						$content: {
							etype: 'html:a',
							text: 'Старые записи →',							
						}
					}
				}
				
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
							etype: 'text',
							cls: 'tag warning',
							style: {
								'padding': 6,
								'margin': 6,
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
						layout: 'stack',
						
						data: [{
							author: 'Jean Lawson',
							avatar: 'img/avatars/001.jpg',
							created_at: 'сегодня, 10:48',
							comment: LOREMIPSUM
						}, {
							author: 'Earl Grant',
							avatar: 'img/avatars/002.jpg',
							created_at: 'сегодня, 9:15',
							comment: LOREMIPSUM_2
						}, {
							author: 'Michael Carr',
							avatar: 'img/avatars/006.jpg',
							created_at: 'вчера 20:55',
							comment: LOREMIPSUM_3
						}, {
							author: 'Frank Williams',
							avatar: 'img/avatars/004.jpg',
							created_at: 'вчера, 19:30',
							comment: LOREMIPSUM_4
						}],
						
						defaultItem: {
							etype: 'media',
							cls: 'recent-comment',
							$before: {
								$content: {
									dataId: 'avatar',
									cls: 'rounded',
									binding: 'src',
									width: 48
								}
							},
							$content: {									
								$author: {
									etype: 'link',
									dataId: 'author'
								},
								$date: {
									cls: 'comment-date',
									dataId: 'created_at',
									binding: 'text'
								},
								$comment: {
									dataId: 'comment',
									binding: function(v) {
										this.opt('text', v.substr(0, 100) + '...' );
									}
								}
							}
						}
					}
				}
			}
			
		}
		
		
		
		
//		$content: {
		
//		}
	});
	
	
	
	
	$context.pages.components.set('content', page);
	
	$context.pages.render();
	
	$context.pages._layoutChanged();
	
});
