

$context.section('Detail');
$context.section_begin('detail-basic');
$context.section_end('detail-basic');

var Provider = new Ergo.data.AjaxProvider('data/mock-30.json'); 



$.ergo({
	etype: 'list',
	cls: 'list',
	renderTo: '#sample',
	data: new Ergo.data.Collection({provider: Provider}),
	autoFetch: true,
	defaultItem: {
		binding: false,
		$header: {
			etype: 'box',
			$toggler: {
				etype: 'icon',
				state: 'fa-angle-right'
			},
			$content: {
				etype: '&text',
				dataId: 'full_name'
			}
		},
		$details: {
			etype: 'box',
			layout: 'band',
			defaultItem: {
				$label: {
					etype: 'icon',
					autoRender: false
//					weight: -10
				},
				// $content: {
					// etype: 'text'
				// },
				set: {
					'label': function(v) { this.label.opt('icon', v); }
				}				
			},
			items: [{
				etype: 'text',
				dataId: 'ip_address',
				label: 'fa-globe'
			}, {
				etype: 'text',
				dataId: 'country',
				label: 'fa-map-marker'
			}, {
				etype: 'link',
				dataId: 'email',
				label: 'fa-envelope'
			}]
		}
	}
});

