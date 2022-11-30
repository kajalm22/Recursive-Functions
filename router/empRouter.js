const express = require("express")
const { addDetails } = require("../controller/empController")
const router = express.Router()


router.route("/create").post(addDetails)

// router.route("/add").post(details)



module.exports = router