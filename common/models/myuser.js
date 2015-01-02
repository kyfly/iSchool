module.exports = function(Myuser) {
    Myuser.afterRemote('create', function(ctx, affectedModelInstance, next) {
        console.log("One person register");
        var Role = Myuser.app.models.Role;
        var RoleMapping = Myuser.app.models.RoleMapping;
        var name = "";
        switch (affectedModelInstance.type){
            case 0:
                name = "teacher";
                break;
            case 1:
                name = "parent";
                break;
            case 2:
                name = "student";
                break;
        }
        Role.find({where:{name:name}},function(err,role){ //赋予注册的用户以一定角色
            RoleMapping.create({principalType:RoleMapping.USER,principalId:affectedModelInstance._id,roleId:role._id},function(err,map){
            });
        });
    });
};
