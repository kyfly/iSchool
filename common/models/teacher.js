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

    Teacher.studentsName = function(id, cb) {
        Teacher.find({include: 'hasManyStudents', where: {id: id}}, function(err, teacher){
            var stuId = [];
            teacher[0].hasManyStudents().forEach(function (stu) {
                stuId.push(stu.$user_id)
            });
            Teacher.app.models.Myuser.find({where: {id: {inq: stuId}}}, function(err, student){
                var names = [];
                student.forEach(function(stu) {
                    names.push(stu.$name);
                });
                cb(null, names);
            })
        })
    };

    Teacher.remoteMethod(
        'studentsName',
        {
            http: {verb:'get'},
            accepts: {arg: "id", type: "string"},
            returns: {arg: 'result', type: 'array'}
        }
    );
};
