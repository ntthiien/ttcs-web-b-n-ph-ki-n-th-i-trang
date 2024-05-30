const User=require("../../models/user.model");

module.exports.requireAuth= async (req,res,next)=>{
    //console.log(req.cookies);
    if(!req.cookies.tokenUser){
        res.redirect(`user/login`);
    }else{
        const user= await User.findOne({token:req.cookies.token});
        if(!user){
            res.redirect(`user/login`);
            return;
        }
        next();
    }
}