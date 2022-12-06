const express = require("express")
const { addDetails,  studentDetails } = require("../controller/empController")
const router = express.Router()


router.route("/create").post(addDetails)


router.route("/save").get(studentDetails)



module.exports = router