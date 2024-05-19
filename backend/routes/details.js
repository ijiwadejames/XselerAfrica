/** @format */

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const detailsController = require("../controllers/detailsController");
const updateDetailsController = require("../controllers/updateDetailsController");
const deleteDetailsController = require("../controllers/deleteDetailsController");

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

  //UPDATE
  .post(
    "/update-personal-details/:id",
    protect,
    updateDetailsController.personal
  )
  .post(
    "/update-academic-qualification/:id",
    protect,
    updateDetailsController.acaQualification
  )
  .post("/update-hobbies/:id", protect, updateDetailsController.hobbies)
  .post(
    "/update-career-objectives/:id",
    protect,
    updateDetailsController.careerObjective
  )
  .post(
    "/update-work-experience/:id",
    protect,
    updateDetailsController.workExperience
  )

  //DELETE
  .post(
    "/delete-work-experience/:jobId/:id",
    protect,
    deleteDetailsController.delWorkExperience
  )
  .post(
    "/delete-career-objective/:objectiveId/:id",
    protect,
    deleteDetailsController.delCareerObjective
  );
module.exports = router;
