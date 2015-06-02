
$context.section('ComboBox');
$context.section_begin('combo-basic');
$context.section_end('combo-basic');



var Provider = {
	find_all: function() {
		return $.ajax({
			url: 'data/mock-300.json',
			dataType: 'json'
		});
	}
};



var data = new Ergo.data.Collection({
	provider: Provider
});



var w = $.ergo({
	etype: 'box',
	renderTo: '#sample',
	layout: 'form',
	items: [{
		etype: 'combo-box',
		
		width: 200,
			
		$dropdown: {
			items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
		}			
	}, {

		etype: 'combo-box',
		
		width: 200,
			
		$dropdown: {
			items: ['Африка', 'Азия', 'Америка', 'Австралия', 'Антарктика', 'Европа']
		},
		
		
		
		onDropdownOpen: function() {
//			this.dropdown.data.events.fire('value:changed');
		},
		
		onDropdownClose: function() {

			this.dropdown.render();//opt('dynamicFilter', null);

			this.states.unset('filtered');
			
		},
		
		
		onChangeText: function(e) {
			
	    var self = this;
	    
	    // Метод №1
	    
	    var s = e.text.toLowerCase();
	    
	    this.dropdown.items.each(function(item) {
	      var v = item.opt('text').toLowerCase();
	      if(!(v && v.indexOf(s) > -1)) {
	        item.unrender();
	      }
	      else {
	        if(!item._rendered) {
	          item.render();
	        }          
	      }
	    });

			this.states.unset('filtered');

			this.states.set('opened');
	    
	    // if(s) {
		    // if(!this.states.is('opened'))
		    	// this.states.set('opened');    	
	    // }
	    // else {
		    // if(this.states.is('opened'))
		    	// this.states.unset('opened');    	
	    // }
		
		}
		
	}, {
		
		etype: 'combo-box',
		
		width: 200,
		
		placeholder: 'Выберите имя...',
			
		$dropdown: {
			data: data,
			autoFetch: true,
			defaultItem: {
				format: '#{full_name}'
			},
			style: {
				'max-height': 300,
				'overflow-y': 'auto'
			}
		},
		
		
		onDropdownOpen: function() {
			this.dropdown.data.events.fire('value:changed');
		},
		
		onDropdownClose: function() {

			this.dropdown.opt('dynamicFilter', null);

			this.states.unset('filtered');
			
		},
		

		onChangeText: function(e) {
			
			var s = e.text.toLowerCase();
			
//			if(s) {

				this.dropdown.opt('dynamicFilter', function(v, i, key) {
					v = v.full_name.toLowerCase();
					return (v && v.indexOf(key) > -1);
				}.rcurry(s));
				
				this.dropdown.data.events.fire('value:changed');
				
				this.states.set('filtered');
				
				this.states.set('opened');
//			}
			// else {
				// this.dropdown.opt('dynamicFilter', null);
// 
				// this.states.unset('filtered');
			// }
			
			
//			this.events.fire('dropdown', {on: !(!s)});
			
		}
		
		
		
		
		
		
	}]
});







