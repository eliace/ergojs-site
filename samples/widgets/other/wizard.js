
var w = $.ergo({
	etype: 'box',
	cls: 'wizard-bar',
	state: 'bordered',
	components: {
		steps: {
			etype: 'list',
			cls: 'wizard-steps',
			layout: 'hbox',
			defaultItem: {
				width: 200,
				$number: {
					etype: 'html:span',
					cls: 'number',
					weight: -100
				},
				$content: {
					etype: 'link',
					$title: {
						etype: 'text'
					},
					$content: {
						etype: 'html:span',
						cls: 'description',
						weight: 100
					},
				},
				set: {
					'text': function(v) { this.content.content.opt('text', v); },
					'title': function(v) { this.content.title.opt('text', v); },
					'num': function(v) { this.number.opt('text', v); }
				},
				onClick: function() {
					this.events.rise('selectStep', {index: this._index});
				}
			},
			items: [
				{text: 'Подготовка', title: 'Шаг 1', num: 1}, 
				{text: 'Описание шага, содержащее длинный текст', title: 'Шаг 2', num: 2}, 
				{text: 'Завершение', title: 'Шаг 3', num: 3}
			]
		},
		content: {
			height: 200,
			mixins: ['stackable'],
			defaultItem: {
				mixins: ['effects'],
				effects: {
					show: {type: 'fadeIn', delay: 300},
					// hide: 'hide',
					// delay: 300
				},
				style: {'padding': 10},
				$content: {
					
				},
				$buttons: {
					layout: 'hbox',
//					state: 'right',
					items: [{
						etype: 'button', 
						text: 'Далее', 
						state: 'primary', 
						onClick: function() { 
							this.events.rise('nextStep'); 
						}
					}]
				}
			},
			items: [LOREMIPSUM, LOREMIPSUM_2, LOREMIPSUM_3]
		}
	},
	onSelectStep: function(e) {
		this.opt('step', e.index);
	},
	onNextStep: function() {
		this.opt('step', this.options.step+1);
	},
	set: {
		'step': function(v) {
			
			var self = this;
			
//			this.content.opt('active', e._index);
			if(this._current)
				this._current.states.unset('current');
				
			this.content.opt('active', v);
			
			this.steps.items.each(function(item, i){
				item.states.toggle('completed', (i <= v));
				if(i == v)
					self._current = item;
			});
			
			if(this._current)
				this._current.states.set('current');

		}
	},
	step: 1
});


w.$render('#sample');




var w2 = $.ergo({
	etype: 'box',
	cls: 'wizard-box',
//	state: 'bordered',
	components: {
		steps: {
			etype: 'list',
			cls: 'wizard-steps',
//			layout: 'hbox',
			defaultItem: {
				width: 200,
				$number: {
					etype: 'html:span',
					cls: 'number',
					weight: -100
				},
				$content: {
					etype: 'link',
					$title: {
						etype: 'text'
					},
					$content: {
						etype: 'html:span',
						cls: 'description',
						weight: 100
					},
				},
				set: {
					'text': function(v) { this.content.content.opt('text', v); },
					'title': function(v) { this.content.title.opt('text', v); },
					'num': function(v) { this.number.opt('text', v); }
				}
			},
			items: [
				{text: 'Подготовка', title: 'Шаг 1', num: 1}, 
				{text: 'Описание шага, содержащее длинный текст', title: 'Шаг 2', num: 2}, 
				{text: 'Завершение', title: 'Шаг 3', num: 3}
			]
		},
		content: {
			
		}
	}
});


w2.$render('#sample');



