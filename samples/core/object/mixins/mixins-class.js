
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
