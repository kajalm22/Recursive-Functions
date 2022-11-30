const express = require("express")
const { addDetails, getEmployees } = require("../controller/empController")
const router = express.Router()


router.route("/create").post(addDetails)

// router.route("/add").post(details)

router.route("/get").get(getEmployees)



module.exports = router