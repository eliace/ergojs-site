
/*
Ergo.defineClass('Ergo.widgets.Text', 'Ergo.core.Widget', {

	defaults: {
		html: '<span/>',
		binding: 'text'
	}

}, 'widget:text');
*/




Ergo.alias('widgets:.', Ergo.html._Text);




/**
 * Строчный элемент
 *
 * :`text`
 *
 * binding: `text`
 *
 * @class
 * @name Ergo.widgets.Text
 * @extends Ergo.core.Widget
 */
Ergo.defineClass('Ergo.widgets.Text', 'Ergo.core.Widget', {

	defaults: {
		html: '<span/>',
		binding: 'text'
	}

}, 'widgets:text');
