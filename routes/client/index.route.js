const homeRoutes=require("./home.route")
const productRoutes=require("./product.route")
const searchRoutes=require("./search.route")
const cartRoutes=require("./cart.route")
const checkoutRoutes=require("./checkout.route")
const userRoutes=require("./user.route")
const introRoutes=require("./intro.route")

const categoryMiddleware=require("../../middlewares/client/category.middleware")
const cartMiddleware=require("../../middlewares/client/cart.middleware")
const userMiddleware=require("../../middlewares/client/user.middleware");
const settingMiddleware=require("../../middlewares/client/setting.middleware")
module.exports=(app)=>{
    app.use("/",categoryMiddleware.category,userMiddleware.infoUser,settingMiddleware.settingGeneral, homeRoutes);
    
    app.use("/products",categoryMiddleware.category,cartMiddleware.cardId,  userMiddleware.infoUser,settingMiddleware.settingGeneral, productRoutes);
    app.use("/search",categoryMiddleware.category,cartMiddleware.cardId,  userMiddleware.infoUser,settingMiddleware.settingGeneral, searchRoutes);
    app.use("/cart",categoryMiddleware.category,cartMiddleware.cardId,  userMiddleware.infoUser,settingMiddleware.settingGeneral, cartRoutes);
    app.use("/checkout",categoryMiddleware.category,cartMiddleware.cardId,  userMiddleware.infoUser,settingMiddleware.settingGeneral, checkoutRoutes);
    app.use("/user",categoryMiddleware.category,cartMiddleware.cardId,  userMiddleware.infoUser,settingMiddleware.settingGeneral, userRoutes);
    app.use("/intro",categoryMiddleware.category,cartMiddleware.cardId,  userMiddleware.infoUser,settingMiddleware.settingGeneral, introRoutes);
}

//cartMiddleware.cardId, 