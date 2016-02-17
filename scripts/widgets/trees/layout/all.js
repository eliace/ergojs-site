
var data = new Ergo.data.Collection({
	provider: new Ergo.data.AjaxProvider('data/tree-users.json')
});




$context.section('Hbox', 'Сдвиг осуществляется с помощью padding-left');
$context.section_begin('layout-hbox');
$context.section_end('layout-hbox');


var w = $.ergo({
	etype: 'tree',

	data: data,

	as: 'tree',

	nestedItem: {
		as: 'item margin-top',
		layout: 'hbox',
//		layout: 'columns',
		$image: {
			etype: 'html:img',
			as: 'rounded before',
			binding: 'prop:src',
			format: function(v) {
				var s = v.id;
				if(v.id < 10) s = '0'+s;
				if(v.id < 100) s = '0'+s;
				return 'demo/blog/img/avatars/'+s+'.jpg';
			},
			width: 32,
			weight: -10
		},
		$content: {
			$content: {
				etype: '.',
				binding: 'prop:text',
				dataId: 'full_name'
			},
			$email: {
				etype: 'text',
				as: 'description',
				dataId: 'email'
			}
		},
		$sub: {
			hidden: false,
//			autoRender: 'not-empty',
			style: {'padding-left': 20},
			as: 'tree'// items-indent'
			// $content: {
			// 	etype: 'box',
			// 	cls: 'item',
			// }
		}
	}


});


w.render('#sample');

$context.section('Columns', 'Сдвиг за счет первой колонки. Первая колонка выровнена по верхнему краю');
$context.section_begin('layout-column');
$context.section_end('layout-column');


var w = $.ergo({
	etype: 'tree',

	data: data,

	cls: 'tree',

	nestedItem: {
		cls: 'item margin-top items-align-top',

		layout: 'columns',	// LAYOUT

		$image: {
			etype: 'html:img',
			cls: 'rounded before',
			binding: 'prop:src',
			col: 'avatar-img',
			format: function(v) {
				var s = v.id;
				if(v.id < 10) s = '0'+s;
				if(v.id < 100) s = '0'+s;
				return 'demo/blog/img/avatars/'+s+'.jpg';
			},
			width: 32,
			weight: -10
		},
		$content: {
			col: 'content',
//			format: '#{full_name}'
			$content: {
				etype: '.',
				binding: 'prop:text',
				dataId: 'full_name'
			},
			$email: {
				etype: 'text',
				cls: 'description',
				dataId: 'email'
			}
		},
		$sub: {
			hidden: false,
			col: 'content',
			cls: 'tree'// items-indent'
			// $content: {
			// 	etype: 'box',
			// 	cls: 'item',
			// }
		}
	}


});


w.render('#sample');



data.fetch();