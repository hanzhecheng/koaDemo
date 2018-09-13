const query = require("../utils/mysql");
const oracle_query = require("../utils/oracle")
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
    static async GetOuInfo(ctx) {
        let result = await oracle_query("select * from t_acl_ou").then(res => {
            return res
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