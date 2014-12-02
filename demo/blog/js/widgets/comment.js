

Ergo.defineClass('App.widgets.FeedComment', 'Ergo.widgets.Media', {
	
	defaults: {
		
		cls: 'feed-comment',
		
		$before: {
			$content: {
				dataId: 'avatar',
				width: 48,
				cls: 'rounded',
				binding: function(v) {
					this.opt('src', 'img/avatars/'+v);
				}
			}
		},
		
		$content: {
			$title: {
				$content: {
					etype: 'link',
					dataId: 'author',
					cls: 'comment-author'
				},							
				$date: {
					dataId: 'created_at',
					binding: 'text',
					cls: 'comment-date'
				}
			},
			$content: {
				dataId: 'comment',
				binding: 'text',
				cls: 'comment-text'
			},
			$replies: {
				dataId: 'replies',
				dynamic: true,
				defaultItem: {
					etype: 'feed-comment'
				}
			}
		}
		
	}




}, 'widgets:feed-comment');