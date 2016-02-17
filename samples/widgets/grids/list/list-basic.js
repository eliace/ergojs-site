

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
	etype: 'table-grid',
	as: 'list-view cell-large',

	data: data,

	$header: {
		events: {
			'ctx:scroll': function() {

				var dy = $(document).scrollTop();
				var y = this.parent.el.offset().top;

//				console.log(y, dy);

				// отсоединяем заголовок
				if(dy > y && !this.states.is('scrolled')) {
					this.el.width( this.el.width() );
					this.states.set('scrolled');
				}
				else if(dy <= y && this.states.is('scrolled')) {
					this.el.width( '' );
					this.states.unset('scrolled');
				}


			}
		}
	},

	$content: {
		autoHeight: false
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
		},
		width: 80
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
