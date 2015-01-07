module.exports = function(Parent) {
    Parent.messages = function(cb) {
        Parent.app.models.Parent.find({fields: {_messages: true}}, function(err, result){
            var msgList = [];
            result.forEach(function(msgs){
                msgs.__data._messages.forEach(function(msg){
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
};
