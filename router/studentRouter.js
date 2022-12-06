const express = require("express")
const { addDetails,  studentDetails } = require("../controller/studentController")
const router = express.Router()


router.route("/create").post(addDetails)


router.route("/save").get(studentDetails)



module.exports = router