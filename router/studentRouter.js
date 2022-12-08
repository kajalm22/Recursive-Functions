const express = require("express")
const { addDetails,  studentDetails, paginatedData, saveUsingPagination 
 } = require("../controller/studentController")
const router = express.Router()


router.route("/create").post(addDetails)


router.route("/save").get(studentDetails)


router.route("/getPaginatedData").get(paginatedData)


// router.route("/get").get(pages)

router.route("/pagination").get(saveUsingPagination)


module.exports = router