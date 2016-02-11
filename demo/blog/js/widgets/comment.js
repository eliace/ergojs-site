

Ergo.defineClass('App.widgets.FeedComment', 'Ergo.widgets.Media', {

	defaults: {

		as: 'feed-comment',

		$before: {
			$content: {
				dataId: 'avatar',
				width: 48,
				as: 'circular',
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
					as: 'comment-author'
				},
				$date: {
					dataId: 'created_at',
					binding: 'text',
					as: 'comment-date'
				}
			},
			$content: {
				dataId: 'comment',
				binding: 'text',
				as: 'comment-text'
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
