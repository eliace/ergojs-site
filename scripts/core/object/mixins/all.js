
$context.section('Mixin', 'Примешивание параметров к классу');
$context.section_begin('mixins-class');
$context.section_end('mixins-class');

// mixin
$ergo.alias('mixins:alert', {

	showAlert: function(m) {
		$context.alert(m);
	}

});

// another mixin
$ergo.alias('mixins:date', {

	showDate: function() {
		$context.alert(Date());
	}

});



var MyClass = Ergo.core.Object.extend({
	mixins: ['alert', 'date']
});


var obj = new MyClass();


obj.showAlert("Text message");
obj.showDate();

$context.section('Include', 'Включение параметров в экземпляр объекта');
$context.section_begin('mixins-instance');
$context.section_end('mixins-instance');

// include
$ergo.alias('includes:alert', {

	doAlert: function(m) {
		$context.alert('!!!!!  ' + m, 'warning');
	}

});


// another include
$ergo.alias('includes:date', {

	showDate: function() {
		$context.alert(Date(), 'warning');
	}

});



// instance include
var obj = new Ergo.core.Object({
	include: 'alert date'
});



obj.doAlert("Text message");
obj.showDate();

