const express = require("express");
const shortUrlController = require("../controllers/shortUrl");
const router = express.Router();

router.get("/", shortUrlController.display);
router.post("/shortUrls", shortUrlController.addUrl);
router.get("/directTo/:shortUrl", shortUrlController.updateClick);
router.get("/delete/:id", shortUrlController.deleteOne);
router.get("/clearAll", shortUrlController.clearAll);

module.exports = router;
