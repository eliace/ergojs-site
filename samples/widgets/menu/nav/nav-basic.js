

var w = $.ergo({
	etype: 'navigation',
	$content: {
		items: [{
			etype: 'list',
			as: 'nav-menu',
			data: data,
			defaultItem: {
				$content: {
					etype: 'link',
					$content: {
						etype: '&text',
						format: '#{title}'
					},
					$caret: {
						etype: 'icon',
						as: 'caret'
					},
					onClick: function(e) {
						this.parent.subtree.open();
						this.parent.subtree.states.set('opened');
						e.base.stopPropagation();
					},
				},
				$subtree: {
					etype: 'nested-list',
					include: 'popup effects',
					dataId: 'children',
					as: 'dropdown-menu',
					popup: {
						at: 'left bottom',
						exclusive: true
					},
					effects: {
						show: {type: 'slideDown', delay: 200},
						hide: 'hide',
						delay: 0
					},
					onClosed: function() {
						this.parent.states.unset('opened');
					},
					nestedItem: {
						$content: {
							etype: 'link',
							$content: {
								etype: '&text',
								format: '#{title}'
							},
							$caret: {
								etype: 'caret',
								as: '+right'
							},
							events: {
								'jquery:mouseenter': function(e) {

									var current = this.parent;

									this.parent.parent.items.each(function(item){
										if( item != current && item.states.is('opened') ) {
											item.subtree.close();
											item.states.unset('opened');
										}
									});

									if(this.parent.states.is('has-subtree') & !this.parent.states.is('opened')) {
										this.parent.subtree.open();
										this.parent.states.set('opened');
									}

									e.stopPropagation();
								}
							}
						},
						$subtree: {
							as: 'dropdown-menu',
							mixins: ['popup', 'effects'],
							popup: {
								at: 'right top',
								exclusive: false
							},
							effects: {
								show: {type: 'slideDown', delay: 200},
								hide: 'hide',
								delay: 0
							},
							onClosed: function() {
								this.parent.states.unset('opened');
							}
						},
						binding: function(v) {
							if(v.children) this.states.set('has-subtree');
						},

					}
				},
				binding: function(v) {
					if(v.children) this.states.set('has-subtree');
				}
			},
		}]
	}
});


w.render('#sample');
