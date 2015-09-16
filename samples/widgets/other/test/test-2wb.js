

$.ergo({
	etype: 'box',
	layout: 'hbox',
	as: '__gap',
	renderTo: '#sample',
	defaultItem:
		onClick: 'action:run'
	},
	items: [{
		etype: 'button',
		as: 'primary',
		text: 'Reset',
		cycles: 0
	}, {
		etype: 'button',
		as: 'warning',
		text: '500',
		cycles: 500
	}, {
		etype: 'button',
		as: 'success',
		text: '1000',
		cycles: 1000
	}, {
		etype: 'button',
		as: 'teal',
		text: '1500',
		cycles: 1500
	}, {
		etype: 'button',
		as: 'danger',
		text: '2000',
		cycles: 2000
	}],
	$result: {
		etype: 'text',
		as: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' с.' }
	},
	onRun: function(e) {
		var t0 = Ergo.timestamp();

		n = e.target.opt('cycles');
		data2wb.fetch();

		var t1 = Ergo.timestamp();

		this.$result.opt('text', (t1 - t0)/1000.0);
	}
});



var w = $.ergo({
	etype: 'table',
	as: 'table grid single-line',
//	height: 400,
	width: 1200,
	column: {
		components: {
			content: {
				etype: 'text',
				as: 'column-text',
			}
		},
		autoBind: false
	},
	// $content: {
	// 	autoHeight: false
	// },
	columns: [{
		header: '#',
		dataId: 'id',
//		format: '#{id}',
		binding: 'text',
		width: 40
	}, {
		header: 'Avatar',
		width: 60,
		$content: {
			etype: 'html:img',
//			format: '#{avatar}',
			dataId: 'avatar',
			binding: 'src',
			as: 'rounded',
			width: 40
		}
	}, {
		header: 'First Name',
		dataId: 'first_name',
//		format: '#{first_name}',
		binding: 'text'
	}, {
		header: 'Last Name',
		dataId: 'last_name',
//		format: '#{last_name}',
		binding: 'text'
	}, {
		header: 'Middle Name',
		dataId: 'middle_name',
//		format: '#{middle_name}',
		binding: 'text'
	}, {
		header: 'Age',
		dataId: 'age',
//		format: '#{age}',
		binding: 'text',
		width: 40
	}, {
		header: 'Gender',
		dataId: 'gender',
//		format: '#{gender}',
		binding: 'text',
		width: 60
	}/*, {
		header: 'Profile',
		$content: {
			etype: 'html:a',
			dataId: 'url',
			binding: function(v) {
				this.el.prop('href', v);
				this.content.opt('text', v ? 'link' : 'missing');
			},
			$content: {
				etype: 'html:spam'
			}
		}
//		dataId: 'profile',
//		binding: 'text'
	}*/, {
		header: 'Home page',
		dataId: 'url',
//		format: '#{url}',
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'email',
//		format: '#{email}',
		binding: 'text'
	}],
	data: data2wb
});


w.render('#sample');
