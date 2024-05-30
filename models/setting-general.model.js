const mongoose=require("mongoose");

const settingGeneralShema= new mongoose.Schema({
    websiteName:String,
    logo:String,
    phone:String,
    email:String,
    address:String,
    copyright:String
},
{
    timestamps: true
})
const SettingGeneral=mongoose.model('SettingGeneral', settingGeneralShema,"settings-general");

module.exports=SettingGeneral;
