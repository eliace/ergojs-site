
var w = $.ergo({
	etype: 'box',
	
	// за счет иерархического связывания оба дочерних виджета будут
	// иметь один и тот же источник данных
	data: '',
	
	// задаем отступы для дочерних элементов
	defaultItem: {
		style: {'margin-right': 20}
	},
	
	items: [{
		etype: 'html:input',
		set: {
			'text': function(v) { this.el.val(v); }
		},
		get: {
			'text': function() { return this.el.val(); }
		},
		events: {
			'jquery:change': function(e, self) {
				self.setValue( self.el.val());			
			}			
		}
	}, {
		etype: 'inline'
	}]
	
	
});

$context.alert('Введенный текст изменяет содержимое источника данных, который обновляет текст другого связанного с ним виджета.');

w.render('#sample');
