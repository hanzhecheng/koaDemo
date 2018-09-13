//const query = require("../util/mysql");
const axios = require('axios');
class User {
    constructor() {

    }
    static async GetUserInfo(ctx) {
        // let result = await query('select * from t_acl_user').then(res => {
        //     return res;
        // }).catch(err => {
        //     return err;
        // })
        ctx.body = "";
    }
    static async GetUserByID(ctx) {
        console.log(ctx.query);
        ctx.body = "测试" + ctx.query;
    }
    static async GetWeibo(ctx) {
        let set = {}
        for (let index = 1; index < 77; index++) {
            let datas = await getall(index).then(res => { return res });
            datas.forEach(item => {
                if (item.mblog.page_info&&item.mblog.page_info.page_title) {
                    if (item.mblog.page_info.page_title.indexOf("·")!==-1) {
                        set[item.mblog.page_info.page_title] ? set[item.mblog.page_info.page_title]++ : set[item.mblog.page_info.page_title] = 1
                    }
                  
                }
            })
        }
        console.log(JSON.stringify(set))
        ctx.body = JSON.stringify(set)
    }

}
function getall(page) {
    return new Promise((res, rej) => {
      
            axios.get('https://m.weibo.cn/api/container/getIndex?uid=2460533887&luicode=10000011&lfid=231093_-_selffollowed&type=uid&value=1763389835&containerid=1076032460533887&page='+page)
            .then(function (response) {
                return res(response.data.data.cards);
            })
            .catch(function (error) {
                console.log(error);
            });
     
    })
}
module.exports = User;