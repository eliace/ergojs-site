
$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	defaultItem: {
		onClick: function() {
			this.events.rise('run');
		}
	},
	items: [{
		etype: 'button',
		cls: 'primary',
		text: 'Reset',
		cycles: 0
	}, {
		etype: 'button',
		cls: 'warning',
		text: '500',
		cycles: 500
	}, {
		etype: 'button',
		cls: 'success',
		text: '1000',
		cycles: 1000
	}, {
		etype: 'button',
		cls: 'teal',
		text: '1500',
		cycles: 1500
	}, {
		etype: 'button',
		cls: 'danger',
		text: '2000',
		cycles: 2000
	}],
	$result: {
		etype: 'text',
		cls: 'text red float-right',
		weight: 10,
		format: function(v) { return 'Итог: ' + v + ' с.' }
	},
	onRun: function(e) {
		var t0 = Ergo.timestamp();

		n = e.target.opt('cycles');
		data.fetch();

		var t1 = Ergo.timestamp();

		this.$result.opt('text', (t1 - t0)/1000.0);		
	}
});



var w = $.ergo({
	etype: 'table',
	cls: 'table grid single-line',
//	height: 400,
	width: 1200,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
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
		binding: 'text',
		width: 40
	}, {
		header: 'Avatar',
		dataId: 'avatar',
		width: 60,
		$content: {
			etype: 'html:img',
			binding: 'src',
			cls: 'rounded',
			width: 40
		}
	}, {
		header: 'First Name',
		dataId: 'first_name',
		binding: 'text'
	}, {
		header: 'Last Name',
		dataId: 'last_name',
		binding: 'text'
	}, {
		header: 'Middle Name',
		dataId: 'middle_name',
		binding: 'text'
	}, {
		header: 'Age',
		dataId: 'age',
		binding: 'text',
		width: 40
	}, {
		header: 'Gender',
		dataId: 'gender',
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
		binding: 'text'
	}, {
		header: 'Email',
		dataId: 'email',
		binding: 'text'
	}],
	data: data
});


w.render('#sample');
