
JsonAjaxProvider = {
	url: 'data/mock-30.json',
	findAll: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};


var data = new Ergo.data.Collection({provider: JsonAjaxProvider});


var w = $.ergo({
	etype: 'table',
	cls: 'table-list',

	data: data,

	// $head: {
		// autoRender: false
	// },

	columns: [{
		header: 'Фото',
		$content: {
			etype: 'icon',
			icon: 'fa-envelope'
			// etype: 'html:img',
			// dataId: 'id',
			// cls: 'avatar',
			// binding: function(v) {
				// var src = 'img/avatars/';
				// src += (v < 10) ? '00' : '0';
				// this.opt('src', src + v + '.jpg');
			// }
		}
	}, {
		header: 'Имя',
		dataId: 'full_name',
		binding: 'prop:text'
	}, {
		header: 'E-mail',
		dataId: 'email',
		binding: 'prop:text'
	}, {
		header: 'Страна',
		dataId: 'country',
		binding: 'prop:text'
	}, {
		header: 'IP',
		dataId: 'ip_address',
		binding: 'prop:text'
	}, {
		header: 'Дата',
		dataId: 'created_at',
		binding: 'prop:text'
	}]

});


w.render('#sample');

data.fetch();
