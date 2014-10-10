
JsonAjaxProvider = {
	url: 'data/mock-30.json',
	find_all: function(source, query) {
		return $.ajax(this.url, {
			data: query,
			dataType: 'json'
		});
	}
};


var data = new Ergo.data.Collection({provider: JsonAjaxProvider});


var w = $.ergo({
	etype: 'table',
	data: data,
	
	$head: {
		autoRender: false
	},
	
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
		binding: 'text'
	}, {
		header: 'E-mail',
		dataId: 'email',
		binding: 'text'
	}, {
		header: 'Country',
		dataId: 'country',
		binding: 'text'
	}, {
		header: 'IP',
		dataId: 'ip_address',
		binding: 'text'
	}, {
		header: 'Created',
		dataId: 'created_at',
		binding: 'text'
	}]
	
});


w.$render('#sample');

data.fetch();
