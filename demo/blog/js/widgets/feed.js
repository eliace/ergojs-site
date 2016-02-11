


Ergo.defineClass('App.widgets.FeedItem', 'Ergo.widgets.Panel', {

	defaults: {

		as: 'feed-post',

		components: {
			header: {
				weight: -20,
				components: {
					title: {
						cls: 'panel-title',
						as: 'padding',
//						etype: 'html:a',
//						binding: 'text',
//						format: '#{title}',
//						dataId: 'title',
						components: {
							author: {
								etype: 'box',
								as: 'post-author',
								weight: 15,
								binding: 'text',
								dataId: 'author'
							},
							content: {
								etype: 'html:a',
								href: '#',
								binding: 'text',
								dataId: 'title'
							}
						}
					},
					toolbar: {
						etype: 'box',
						layout: 'float',
						components: {
							date: {
								etype: 'text',
								as: 'right post-date',
								dataId: 'created_at'
//								text: '5 минут назад'
							}
						}
					}
				}
			},
			image: {
				etype: 'html:img',
				as: 'post-img',
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
						etype: '.',
						dataId: 'text',
						binding: 'text'
//						text: LOREMIPSUM
					},
					readmore: {
						etype: 'link',
						text: 'Читать дальше »',
						as: 'after',
						binding: false
					}
				}
			},
			footer: {
//				autoRender: true,
				components: {
					comments: {
						etype: 'link',
						binding: 'text',
//						dataId: 'comments',
						format: '#{comments} комментариев'
//						text: '12 комментариев'
					}
				}
			}
		}
	}

}, 'widgets:feed-item');
