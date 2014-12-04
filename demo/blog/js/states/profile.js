


$context.state('profile:page', function(on, params) {
	
	if(!on) {
		return;
	}
	
	$context.menu.opt('index', 'profile');
	
	
	var data = {
		
		
		activity: [{
			avatar: '010.jpg',
			author: 'Ralph Romero',
			created_at: 'сегодня 12:48',
			comment: LOREMIPSUM
		}, {
			avatar: '011.jpg',
			author: 'Janet Crawford',
			created_at: 'сегодня 11:06',
			comment: LOREMIPSUM_2
		}, {
			avatar: '012.jpg',
			author: 'Carl Campbell',
			created_at: 'сегодня 9:22',
			comment: LOREMIPSUM_3,
			replies: [{
				avatar: '016.jpg',
				author: 'Steven Rivera',
				created_at: 'сегодня 10:03',
				comment: LOREMIPSUM,				
				replies: [{
					avatar: '017.jpg',
					author: 'Roger Rice',
					created_at: 'сегодня 10:08',
					comment: LOREMIPSUM_5,				
				}]
			}]
		}, {
			avatar: '013.jpg',
			author: 'Jeffrey Medina',
			created_at: 'вчера 19:10',
			comment: LOREMIPSUM_4
		}, {
			avatar: '014.jpg',
			author: 'Stephen Riley',
			created_at: 'вчера 03:54',
			comment: LOREMIPSUM_3
		}, {
			avatar: '015.jpg',
			author: 'Daniel Cooper',
			created_at: '2013-11-30 14:27',
			comment: LOREMIPSUM_4
		}]
		
	};
	
	


	var page = $.ergo({
		etype: 'box',
		
		layout: 'grid',
		
		pattern: [4, 8],
		
		data: data,
		
		
		$profile: {
			etype: 'panel',
			title: 'Профиль',
			
			cls: 'profile',
			
			autoBind: false,
			
			$content: {
				
				cls: 'padded',				
				
				$private: {
					
					style: {
						'text-align': 'center'
					},
					
					$photo: {
						etype: 'html:img',
						cls: 'rounded',
						src: 'img/avatars/005.jpg',
						width: 128,
						wrapper: {
							cls: 'image-wrap rounded',
							autoRender: true
						}
					},
					
					$myname: {
						text: 'Jonathan Castillo',
						cls: 'user-name'
					}
				
				},
				
				$aboutme: {
					$title: {
						etype: 'html:h3',
						text: 'О себе',
						cls: 'block-title'
					},
					$content: {
						text: LOREMIPSUM.substr(0, 200)
					}
				},
				
				$statistics: {
					
					$title: {
						etype: 'html:h3',
						text: 'Статистика',
						cls: 'block-title'
					},
					$content: {
					
						layout: 'stack',
					
						defaultItem: {
							$tag: {
								etype: 'html:span',
								cls: 'badge default before',
								weight: -10,
							},
							$content: {
								etype: '&text'
							},
							binding: function(v) {
								this.tag.opt('text', v);
							}
						},
						items: [{
							text: 'записей',
							value: 43
						}, {
							text: 'комментариев',
							value: 124
						}, {
							text: 'читателей',
							value: 211
						}]
					
					}
				},
				
				$actions: {
					cls: 'profile-actions',
					$mailtome: {
						etype: 'button',
						state: 'primary tiny',
						text: 'Написать мне',
						$before: {
							etype: 'icon',
							cls: 'fa fa-envelope before',
							weight: -10
						},
						$content: {
							etype: '&text'
						}
					}
				}
				
			}
			
		},
		
		$activity: {
			etype: 'panel',
			title: 'Активность',
			
			cls: 'profile-activity',
			
			dataId: 'activity',
			
			$content: {
				
//				cls: 'padded',
				
				dynamic: true,
				
				defaultItem: {
					
					etype: 'feed-comment'
					
				}
				
				
				
				
			}
			
			
		}
		
		
		
		
	});




	$context.pages.components.set('content', page);
	
	$context.pages.render();
	
	$context.pages._layoutChanged();



	
});
