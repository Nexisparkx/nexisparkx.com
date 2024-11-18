const express=require("express");
const router=express.Router();
const {register,getRegistrationDetail}=require("../controller/registrationController");

    router.post("/submitform",register);
    router.get("/getDetail",getRegistrationDetail);
module.exports = router;  