const router=require("koa-router")();
const User=require("../controller/user");
const routers=router.get("/getUser",User.GetUserInfo)
.get("/GetUserByID",User.GetUserByID);
module.exports=routers;
