var getUser = (id, callback) => {
	
	var user = {
		id: id,
		name:'Amit'
	};

	setTimeout(() => {
		callback(user);
	}, 3000)
};

getUser(27, (userObj) => {
	console.log('User -> ' + userObj.id + ', ' + userObj.name);
});