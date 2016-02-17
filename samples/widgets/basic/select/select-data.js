

var userData = {
	user_id: -1,
	user_title: '---'
};

var users = new Ergo.data.Collection({provider: usersProvider});


var w = $.ergo({
	etype: 'select',
//	as: '+placeholder',
	$content: {
		format: '#{user_title}',
		placeholder: 'Варианты...',
		binding: 'prop:text'
	},
	$dropdown: {
		defaultItem: {
			format: '#{full_name}',
			get: {
				'name': function() {
					return {user_id: this.data.get('id'), user_title: this.opt('text')}
				}
			}
		},
		data: users
	},
	data: userData,
	dataId: ['user_id', 'user_title'],
	// selection: {
	// 	lookup: function(v) {
	// 		return this.$dropdown.items.find(function(item) { return item.opt('name').user_id == v.user_id; } );
	// 	}
	// }
});


users.fetch();



w.render('#sample');
