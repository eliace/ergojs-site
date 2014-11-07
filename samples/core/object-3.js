
// примесь-объект
var ObjectMixin = {
				
	showAlert: function(m) {
		$context.alert(m);
	}
	
};

// примесь-функция
var FunctionMixin = function(o) {
	
	this.alert = function(m) {
		$context.alert(this.options.prefix + ': ' + m);
	};
	
	o.prefix = o.prefix || 'Сообщение';
	
};



// регистрируем примесь для использования псевдонима
Ergo.defineMixin('Ergo.mixins.DoAlert', function(o) {
	
	this.doAlert = function(m) {
		$context.alert('!!!!!  ' + m);
	};	
	
}, 'mixins:do-alert');



var obj = new Ergo.core.Object({
	
	mixins: [ ObjectMixin, FunctionMixin, 'do-alert' ]
	
});

obj.alert("Текстовое сообщение");
obj.showAlert("Текстовое сообщение 2");
obj.doAlert("Текстовое сообщение 3");





var MyClass = Ergo.core.Object.extend({
	
	defaults: {
		mixins: [ ObjectMixin, FunctionMixin, 'do-alert' ]			
	}
	
});


obj = new MyClass({
	prefix: '[MESSAGE]'
});

obj.alert("Текстовое сообщение 4");

