module.exports = function(Parent) {
    Parent.messages = function(cb) {
        Parent.app.models.Parent.find({fields: {_messages: true, id: true}}, function(err, result){
            var msgList = [];
            result.forEach(function(msgs){
                msgs.__data._messages.forEach(function(msg){
                    msg.parent_id = msgs.__data.id;
                    msgList.push(msg);
                })
            });
            cb(null, msgList);
        });

    };
    Parent.remoteMethod(
        'messages',
        {
            http: {verb:'get'},
            returns: {arg: 'messages', type: 'object'}
        }
    );

	Parent.getAllParents = function(id, cb){
		var myuser = Parent.app.models.myuser;
		var parent = Parent.app.models.Parent;
		Parent.find({
		  include: {
		    relation: 'belongToMyUser',
		    scope: {
		      fields: ['name']
		    }
		  }
		},
		function(err, parents){
			var result = [];
			for(var key in parents){
				result[key] = {};
				result[key].parent_id = parents[key].id;
				result[key].name = parents[key].__data.belongToMyUser.name;
			}
			cb(null, result);
		});
	};

	Parent.remoteMethod(
		'getAllParents',
		{
			accepts: {arg: 'id', type:'number'},
          	returns: {arg: 'parents', type: 'string'}
		}
	);
};
