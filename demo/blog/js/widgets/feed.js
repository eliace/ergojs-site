


Ergo.defineClass('App.widgets.FeedItem', 'Ergo.widgets.Panel', {
	
	defaults: {
		
		cls: 'feed-post',
		
		components: {
			header: {
				weight: -20,
				components: {
					title: {
//						etype: 'html:a',
//						binding: 'text',
//						format: '#{title}',
//						dataId: 'title',
						components: {
							author: {
								etype: 'box',
								cls: 'post-author',
								weight: 15,
								binding: 'text',
								dataId: 'author'
							},
							content: {
								etype: 'html:a',
								binding: 'text',
								dataId: 'title'
							}
						}
					},
					toolbar: {
						layout: 'fluid',
						components: {
							date: {
								etype: 'text',
								cls: 'pull-right post-date',
								dataId: 'created_at'
//								text: '5 минут назад'
							}
						}
					}					
				}
			},
			image: {
				etype: 'html:img',
				cls: 'post-img',
				weight: -10,
				dataId: 'image',
				autoRender: false,
				binding: function(v) {
					this.opt('src', v);
					if(v) {
						this.options.autoRender = true;
						this.render();
					}
				}
			},
			content: {
				components: {
					content: {
						etype: '&text',
						dataId: 'text'
//						text: LOREMIPSUM
					},
					readmore: {
						etype: 'link',
						text: 'Читать дальше »',
						cls: 'after',
						binding: false
					}
				}
			},
			footer: {
				autoRender: true,
				components: {
					$comments: {
						etype: 'link',
//						dataId: 'comments',
						format: '#{comments} комментариев'
//						text: '12 комментариев'
					}
				}
			}
		}
	}
	
}, 'widgets:feed-item');
