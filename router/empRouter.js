const express = require("express")
const { addDetails,  empDetails } = require("../controller/empController")
const router = express.Router()


router.route("/create").post(addDetails)


router.route("/save").get(empDetails)



module.exports = router