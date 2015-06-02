
$.ergo({
	etype: 'box',
	layout: 'bar',
	renderTo: '#sample',
	items: [{
		etype: 'button',
		cls: 'primary',
		text: 'Reset',
		onClick: function() {
			n = 0;
			data.fetch();
		}		
	}, {
		etype: 'button',
		cls: 'warning',
		text: '500',
		onClick: function() {
			n = 300;
			data.fetch();
		}
	}, {
		etype: 'button',
		cls: 'success',
		text: '1000',
		onClick: function() {
			n = 1000;
			data.fetch();
		}
	}, {
		etype: 'button',
		cls: 'danger',
		text: '2000',
		onClick: function() {
			n = 2000;
			data.fetch();
		}
	}]
});



var w = $.ergo({
	etype: 'table-grid',
	cls: 'list-view cell-small',
	height: 400,
	column: {
		components: {
			content: {
				etype: 'text',
				cls: 'column-text',
			}
		},
		autoBind: false
	},
	$content: {
		autoHeight: false
	},
	columns: [{
		header: '#',
		dataId: 'id',
		binding: 'text'
	}, {
		header: 'Avatar',
		dataId: 'avatar',
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
		header: 'Age',
		dataId: 'age',
		binding: 'text'
	}, {
		header: 'Gender',
		dataId: 'gender',
		binding: 'text'
	}, {
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
	}],
	data: data
});


w.render('#sample');
