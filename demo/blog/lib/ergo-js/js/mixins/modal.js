


Ergo.alias('includes:modal', {

	defaults: {

		autoHeight: 'ignore',

		destroyOnClose: true,

		components: {
			overlay: {
				etype: 'html:div',
				cls: 'overlay',
				autoHeight: 'ignore',
	//			render: 'body',
				events: {
					'jquery:click': function(e) {

						Ergo.context.events.fire('outerClick', {type: 'overlay'});

						if(this.parent.options.closeOn == 'outerClick')
							this.parent.close();

						// блокируем всплывание событий
						e.preventDefault();
						return false;
					}
				}
			}
		},
		events: {
			'jquery:click': function(e) {
				Ergo.context.events.fire('outerClick', {type: 'modal'});
//				if(this.options.closeOn == 'outerClick')
				e.stopPropagation();
			},
		}
	},


	overrides: {

		open: function() {

			var o = this.options;

			var modal = this;

			if(arguments.length == 2) {
				// x, y
				var x = arguments[0];
				var y = arguments[1];

				modal.el.css({'top': y, 'left': x});
			}

			// получаем новый индекс z-слоя
			var z = Ergo.context._z || 0;
			z++;

			// устанавливаем z-index
			modal.overlay.el.css({'z-index': z*1000});
			modal.el.css({'z-index': z*1000+1});

			$('body').append(modal.overlay.el);

			modal.overlay.el.append(modal.el);

			modal._rendered = true;
			modal.overlay._rendered = true;
	//		this.overlay.items.add(this);
	//		$('body').append(this.el);

			modal.render();





			var result = modal.overlay.show().then(function(){

/*
				//	поскольку оверлей уже отрисовался, можно расчитывать положение окна

				this.el.show();

				// здесь, в зависимости от методики позиционирования, расчитываются параметры


				if(o.position == 'top') {

					// top
					var w = this.el.width();

					var x = w/2;

					this.el.css({'margin-left': -x, 'top': 0});

				}
				else if(o.position == 'right') {

					// top
					var h = this.el.height();

					h = Math.min(h, $(window).height());

					var y = h/2;


					this.el.css({'right': 0, 'left': 'auto', 'margin-top': -y});

				}
				else {

					// center
					var w = this.el.width();
					var h = this.el.height();

					h = Math.min(h, $(window).height());

					var x = w/2;
					var y = h/2;


					this.el.css({'margin-left': -x, 'margin-top': -y});
				}


				this.el.hide();
*/

				this.show().then(function(){
					this.events.fire('opened');
					this._layoutChanged();
				}.bind(this));

				this.events.fire('open');

			}.bind(this));



			return result;
		},


		//
		// Close modal
		//
		close: function() {

			var e = new Ergo.core.Event();

			this.events.fire('close', e);

			if(e.canceled)
				return;


			Ergo.context._z--;

			return this.hide().then(function(){

	//			this.el.detach();

				this.overlay.hide().then(function(){
					this.overlay.el.detach();
					this.events.fire('closed');

					if(this.options.destroyOnClose)
						this._destroy();

				}.bind(this));

			}.bind(this));


		},


		/**
		 *
		 * Resize modal
		 *
		 */
		resize: function(w, h, comp) {

			var w1, h1;

			if(arguments.length > 0) {

				var el = (comp) ? this.component(comp).el : this.el;

				var w0 = el.css('width');//width();
				var h0 = el.css('height');//height();

//				setTimeout(function(){
					el.css({'width': w, 'height': h});
//				}, 1)

				var w1 = this.el.width();
				var h1 = this.el.height();

				// el.css({'width': w0, 'height': h0});

				// el.animate({
				// 	width: w,
				// 	height: h,
				// 	// 'margin-left': -w/2,
				// 	// 'margin-top': -h/2
				// });

			}
			else {
				w1 = this.el.width();
				h1 = this.el.height();
			}

			// return $.when(this.el.animate({
			// 	'margin-left': -w1/2,
			// 	'margin-top': -h1/2
			// }));

			return $.when(true);
		}


	}


});
