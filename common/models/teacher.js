module.exports = function(Teacher) {
    Teacher.getAllTeachers = function(id, cb){
      var myuser = Teacher.app.models.myuser;
      Teacher.find({
          include: {
            relation: 'belongToMyUser',
            scope: {
              fields: ['name']
            }
          }
        },
        function(err, teachers){
          console.log(teachers);
          var result = [];
          for(var key in teachers){
            result[key] = {};
            result[key].teacher_id = teachers[key].id;
            result[key].name = teachers[key].__data.belongToMyUser.name;
          }
          cb(null, result);
        });
    };

    Teacher.remoteMethod(
      'getAllTeachers',
      {
        accepts: {arg: 'id', type:'number'},
        returns: {arg: 'teachers', type: 'string'}
      }
    );
};
