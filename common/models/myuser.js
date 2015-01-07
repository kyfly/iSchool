module.exports = function (Myuser) {
    Myuser.afterRemote('create', function (ctx, affectedModelInstance, next) {
        console.log("One person register");
        var Role = Myuser.app.models.Role;
        var RoleMapping = Myuser.app.models.RoleMapping;
        var name = "";
        switch (affectedModelInstance.type) {
            case 0:
                name = "teacher";
                Myuser.app.models.Teacher.create({
                    user_id: affectedModelInstance.id
                });
                break;
            case 1:
                name = "parent";
                Myuser.app.models.Parent.create({
                    user_id: affectedModelInstance.id
                });
                break;
            case 2:
                name = "student";
                Myuser.app.models.Student.create({
                    user_id: affectedModelInstance.id,
                    teacher_id: ctx.req.body.teacher_id,
                    parent_id: ctx.req.body.parent_id
                });
                break;
        }
        Role.find({where: {name: name}}, function (err, role) { //赋予注册的用户以一定角色
            RoleMapping.create({
                principalType: RoleMapping.USER,
                principalId: affectedModelInstance.id,
                roleId: role[0].id
            }, function (err, map) {
            });
        });
        next();
    });
};
