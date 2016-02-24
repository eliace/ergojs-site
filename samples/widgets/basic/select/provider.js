
var usersProvider = {

	url: 'data/mock-30.json',

	findAll: function() {
		return $.ajax(this.url, {
			method: 'get',
			dataType: 'json'
		});
	}
}
