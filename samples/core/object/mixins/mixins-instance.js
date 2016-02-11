
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
