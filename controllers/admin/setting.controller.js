const SettingGeneral=require("../../models/setting-general.model")

//[GET] /admin/settings/general
module.exports.general=async (req,res)=>{
    const settingGeneral=await SettingGeneral.findOne({});
    console.log(settingGeneral);
    res.render("admin/pages/settings/general",{
        pageTitle:"Cài đặt chung",
        settingGeneral:settingGeneral
    })
}

//[PATC] /admin/settings/general
module.exports.generalPatch= async(req,res)=>{
    const settingGeneral=await SettingGeneral.findOne({})
    if(settingGeneral){
        await SettingGeneral.updateOne({
            _id:settingGeneral.id
        },req.body)
    } else{
        const record=new SettingGeneral(req.body);
        await record.save();

    }
    
    req.flash("success","cap nhat thanh cong")
    res.redirect("back");
}