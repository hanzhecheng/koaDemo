const router=require("koa-router")();
const User=require("./user");
router.use("/User",User.routes(),User.allowedMethods());
module.exports=router;