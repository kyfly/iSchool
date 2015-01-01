module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
    Role.create({
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
  });
};
