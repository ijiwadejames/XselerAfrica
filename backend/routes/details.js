/** @format */

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const detailsController = require("../controllers/detailsController");
const updateDetailsController = require("../controllers/updateDetailsController");
const deleteDetailsController = require("../controllers/deleteDetailsController");
const getDetailsController = require("../controllers/getDetailsController");

router
  //ADD
  .post("/personal-details", protect, detailsController.personal)
  .post("/career-objectives", protect, detailsController.objective)
  .post(
    "/academic-qualification",
    protect,
    detailsController.academicQualications
  )
  .post("/work-experience", protect, detailsController.workExperience)
  .post("/hobbies", protect, detailsController.hobbies)

  //GET
  .get("/getMe", protect, getDetailsController.personal)
  .get("/get-qualification", protect, getDetailsController.qualification)
  .get("/get-experience", protect, getDetailsController.experience)

  //UPDATE
  .post("/update-personal-details", protect, updateDetailsController.personal)
  .post(
    "/update-academic-qualification",
    protect,
    updateDetailsController.acaQualification
  )
  .post("/update-hobbies", protect, updateDetailsController.hobbies)
  .post(
    "/update-career-objectives",
    protect,
    updateDetailsController.careerObjective
  )
  .post(
    "/update-work-experience",
    protect,
    updateDetailsController.workExperience
  )

  //DELETE
  .post(
    "/delete-work-experience",
    protect,
    deleteDetailsController.delWorkExperience
  )
  .post(
    "/delete-career-objective/:objectiveId/:id",
    protect,
    deleteDetailsController.delCareerObjective
  )
  .post(
    "/delete-academic-qualification",
    protect,
    deleteDetailsController.delQual
  );
module.exports = router;
