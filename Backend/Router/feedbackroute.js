const express=require("express");
const router=express.Router({ mergeParams: true });
const {getFeedbackDetail , feedback}=require("../controller/feedbackcontroller");

    router.post("/submitfeedback",feedback);
    router.get("/getDetail",getFeedbackDetail);
module.exports = router;  