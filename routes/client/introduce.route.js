const express= require("express");
const router=express.Router();

const controller=require("../../controllers/client/introduce.controller")

router.get("/come", controller.come);
router.get("/recruitment", controller.recruitment);

module.exports=router;