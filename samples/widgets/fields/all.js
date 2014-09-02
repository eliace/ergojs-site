
var w = $.ergo({
	etype: 'box',
	layout: 'form',
	width: 250,
	defaultItem: {
		mixins: ['label']
	},
	items: [{
		etype: 'text-box',
		cls: 'form-item',
		label: 'Текст',
		components: {
			addon: {
				etype: 'html:span',
				cls: 'addon',
				$content: {
					etype: 'icon',
					html: '<button/>',
					cls: 'fa fa-search fa-fw'
				}
			}
		}
	}, {
		etype: 'text-box',
		cls: 'form-item',
		label: 'Комбо-бокс',
		mixins: ['dropdown'],
		components: {
			addon: {
				etype: 'html:span',
				cls: 'addon',
				$content: {
					etype: 'icon',
					html: '<button/>',
					cls: 'fa fa-caret-down fa-fw'
				},
				onClick: function(e) {
					this.parent.states.toggle('opened');
					e.baseEvent.stopPropagation();
				}
			},
			dropdown: {
//				etype: 'dropdown-menu',
				popup: {
//					at: 'left bottom',
					adjust: true
				},
				items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
			}
		}
		// states: {
			// 'opened': function(on) {
				// on ? this.dropdown.open() : this.dropdown.close();
			// }
		// }
	}, {
		etype: 'text-box',
		label: 'Число',
		cls: 'number',
		components: {
			addon: {
				cls: 'addon spinner',
				html: '<span>',
				components: {
					up: {
						html: '<span>',
						cls: 'up',
						$content: {
							etype: 'icon',
							html: '<button/>',
							cls: 'fa fa-fw fa-caret-up'
						}
					},
					down: {
						html: '<span>',
						cls: 'down',
						$content: {
							etype: 'icon',
							html: '<button/>',
							cls: 'fa fa-fw fa-caret-down'
						}
					}
				}
			}
		}
	}, {
		etype: 'text-box',
		cls: 'form-item',
		label: 'Дата',
		components: {
			addon: {
				etype: 'html:span',
				cls: 'addon',
				$content: {
					etype: 'icon',
					html: '<button/>',
					cls: 'fa fa-calendar fa-fw'
				}
			}
		}
	}, {
		etype: 'text-box',
		label: 'Выпадающий список',
		cls: 'select-box',
		mixins: ['dropdown'],
		components: {
			content: {
				type: 'button',
//				etype: 'html:span'
				onClick: function(e) {
					this.parent.states.toggle('opened');
					e.baseEvent.stopPropagation();
				}
			},
			addon: {
				etype: 'html:span',
				cls: 'addon',
				$content: {
					etype: 'icon',
					html: '<button/>',
					cls: 'fa fa-caret-down fa-fw'
				},
				onClick: function(e) {
					this.parent.states.toggle('opened');
					e.baseEvent.stopPropagation();
				}
			},
			dropdown: {
				etype: 'dropdown-list',
				popup: {
//					at: 'left bottom',
					adjust: true
				},
				items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
			}
		}
		// states: {
			// 'opened': function(on) {
				// on ? this.dropdown.open() : this.dropdown.close();
			// }
		// }
	}, {
		etype: 'box',
		cls: 'slide-box',
		components: {
			content: {
				$slider: {
					cls: 'slider',
					html: '<a href=""/>',
					$content: {
					}					
				}
			}
		},
		value: '70%',
		set: {
			'value': function(v) {
				this.content.el.css('padding-left', v);
			}
		}
	}]
});

w.$render('#sample');
