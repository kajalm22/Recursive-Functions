const express = require("express")
const { addDetails,  studentDetails, paginatedData } = require("../controller/studentController")
const router = express.Router()


router.route("/create").post(addDetails)


router.route("/save").get(studentDetails)


router.route("/getPaginatedData").get(paginatedData)


module.exports = router