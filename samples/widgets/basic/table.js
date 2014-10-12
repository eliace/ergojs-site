

$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Вид списка',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'table',
//	cls: 'demo-table',
	cls: 'list-view',
	columns: [{
		header: 'Наименование'
	}, {
		header: 'Площадь, км²'
	}, {
		header: 'Население, чел.'
	}, {
		header: 'Кол-во государств'
	}],
	rows: [['Африка', '30,221,532', '1,032,532,974 (2011)', '55'], 
				 ['Азия', '44,579,000', '4,164,252,000', '49 (+5 частично непризнанных)'], 
				 ['Европа', '10,180,000', '739,165,030', '50'], 
				 ['Австралия и Океания', '8,520,000', '33,800,000', '14'],
				 ['Америка', '42,549,000', '953,700,000', '35+23'],
				 ['Антарктида', '14,107,000', '-', '-']]
});

w.$render('#sample');



$.ergo({
	etype: 'html:h3',
	cls: 'demo-section',
	text: 'Вид таблицы',
	renderTo: '#sample'
});


var w = $.ergo({
	etype: 'table',
	cls: 'table-view widget',
	columns: [{
		header: 'Наименование'
	}, {
		header: 'Площадь, км²'
	}, {
		header: 'Население, чел.'
	}, {
		header: 'Кол-во государств'
	}],
	rows: [['Африка', '30,221,532', '1,032,532,974 (2011)', '55'], 
				 ['Азия', '44,579,000', '4,164,252,000', '49 (+5 частично непризнанных)'], 
				 ['Европа', '10,180,000', '739,165,030', '50'], 
				 ['Австралия и Океания', '8,520,000', '33,800,000', '14'],
				 ['Америка', '42,549,000', '953,700,000', '35+23'],
				 ['Антарктида', '14,107,000', '-', '-']]
});

w.$render('#sample');



