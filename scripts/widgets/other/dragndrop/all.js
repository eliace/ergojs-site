
$context.section('Упорядочивание списка');
$context.section_begin('dragndrop-list');
$context.section_end('dragndrop-list');


var data = ['Африка', 'Азия', 'Европа', 'Арктика', 'Антарктика'];
var data2 = ['Америка', 'Австралия'];



var w = $.ergo({
	etype: 'box',
	layout: 'grid',
	renderTo: '#sample',
	items: [{
		etype: 'list',
		as: 'list-view aaa',
		width: 200,
		data: data,
		$stub: {
			etype: 'html:li',
			style: {/*'border': '1px dashed #eee',*/ 'background-color': '#f0f0f0'},
			autoRender: false
		},
		$drag: {
			etype: 'html:li',
			as: 'list-view-item drag',
			style: {'position': 'absolute'},
			binding: 'text',
			autoRender: false
		},
		defaultItem: {

			events: {
				'jquery:mousedown': function(e) {


					var offset = this.el.offset();

					var drag = {
						dx: e.pageX - offset.left,
						dy: e.pageY - offset.top,
					};

					this.el.parents().each(function(i, p){
						drag.dy += $(p).scrollTop() || 0;
					});

//					console.log(this.el.parents());
//					console.log($('html').scrollTop());



					var self = this;

					// console.log(e.pageX, e.pageY);
					// console.log(offset.left, offset.top);
					// console.log(drag);

					var glass = $('<div class="glass"/>');
					$('body').append(glass);

					glass.on('mousemove', function(e) {

						if(drag) {
							drag_wrapper.css({
								left: e.pageX - drag.dx,
								top: e.pageY - drag.dy
							});
						}

						self.rise('drag', {x: e.pageX, y: e.pageY});

					});

					glass.on('mouseup', function(e) {


						stub.el.after(self.el);

						stub.unrender();

						drag_obj.unrender();

						glass.remove();

						self.render();

						self.rise('drop', {target: self});
					});


					var stub = this.parent.stub;
					var drag_obj = this.parent.drag;

					stub.opt('autoRender', true);
					stub.render();

					drag_obj.opt('autoRender', true);
					drag_obj.render();

					this.el.before(stub.el);

					stub.el.width(this.el.width());
					stub.el.height(this.el.height());


					drag_obj.bind(this.data);


					var drag_wrapper = drag_obj.el;//$('<div style="position: absolute"/>');
					drag_wrapper.width(this.el.width());
					drag_wrapper.height(this.el.height());

					drag_wrapper.css({
						left: e.pageX - drag.dx,
						top: e.pageY - drag.dy
					});



					this.unrender();
//					this.el.hide();
//					drag_wrapper.append(this.el);

					glass.append(drag_wrapper);


					e.preventDefault();
				}
			}
		},

		onDrag: function(e) {

			var self = this;
			var stub = this.stub;

			this.items.each(function(item) {

				var offset = item.el.offset();
				var width = item.el.outerWidth();
				var height = item.el.outerHeight();

				var bbox = {
					min_x: offset.left,
					max_x: offset.left+width,
					min_y: offset.top,
					max_y: offset.top+height
				};

				if(e.x > bbox.min_x && e.x < bbox.max_x && e.y > bbox.min_y && e.y < bbox.max_y) {

					if(e.y - bbox.min_y < height/2) {
						item.el.before(stub.el);
						self._sortable_index = item._index;
					}
					else {
						item.el.after(stub.el);
						self._sortable_index = item._index+1;
					}

				}


			});

		},

		onDrop: function(e) {

			var v = e.target.data.get();


			console.log(this._sortable_index);

			var item = this.items.get(this._sortable_index);
			if(item) {
				console.log(item.data.id,'data id');
				this.data.add(v, item.data.id);
			}
			else {
				this.data.add(v);
			}

			e.target.data.del();

			console.log(this.data.get());


		}


	}, {
		etype: 'list',
		as: 'list-view',
		width: 200,
		data: data2
	}]
});
