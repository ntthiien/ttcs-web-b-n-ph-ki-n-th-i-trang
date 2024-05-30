const express= require("express");
const router=express.Router();

const controller=require("../../controllers/client/intro.controller")

router.get("/come", controller.come);
router.get("/recruitment", controller.recruitment);

module.exports=router;