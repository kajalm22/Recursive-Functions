const express = require("express")
const { addDetails,  studentDetails, paginatedData , pages 
 } = require("../controller/studentController")
const router = express.Router()


router.route("/create").post(addDetails)


router.route("/save").get(studentDetails)


router.route("/getPaginatedData").get(paginatedData)

// router.route("/pages").get(showData)

router.route("/get").get(pages)


module.exports = router