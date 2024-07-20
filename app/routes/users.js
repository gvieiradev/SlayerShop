const express = require("express")
const router = express.Router()
const checkOrigin = require("../middleware/origin")
const {getItems,getItem,createItems,updateitems,deleteItems} = require("../controllers/users")

router.get("/", getItems)
router.get("/:id", getItem)
router.post("/", checkOrigin, createItems)
router.patch("/:id", updateitems)
router.delete("/:id", deleteItems)

module.exports = router