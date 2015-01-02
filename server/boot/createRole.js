module.exports = function(app) {
  var User = app.models.User;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
   /* Role.create({
      name: 'admin'
    }, function(err, role) {
    });
  Role.create({
    name: 'student'
  }, function(err, role) {
  });
  Role.create({
    name: 'parent'
  }, function(err, role) {
  });
  Role.create({
    name: 'teacher'
  }, function(err, role) {
  });*/
  /*User.create([
    {username: 'Bob', email: 'bob@projects.com', password: 'opensesame'}
  ], function(err, users) {
    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].id
      });
    });
  });*/
};


