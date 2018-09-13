const query = require("../utils/mysql");
class User {
    constructor() {

    }
    static async GetUserInfo(ctx) {
        let result = await query('select * from t_acl_user').then(res => {
            return res;
        }).catch(err => {
            return err;
        })
        ctx.body = result;
    }
    static async GetUserByID(ctx) {
        console.log(ctx.query);
        ctx.body = "测试" + ctx.query;
    }
}
module.exports = User;