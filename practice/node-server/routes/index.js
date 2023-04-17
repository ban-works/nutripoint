var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
var unixPrint = require("unix-print");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.post("/print_pdf", async (req, res) => {

  // Access the default printer and save infos
  const printerInfos = await unixPrint.getDefaultPrinter();
  console.log(printerInfos);

  // If no printer or printer offline, send an error to frontend
  if (
    !printerInfos ||
    printerInfos.status === undefined ||
    printerInfos.status.includes("offline") ||
    printerInfos.alerts.includes("offline")
  ) {
    res.json({result:false, error:'The printer is offline'});
    return;
  }


});
module.exports = router;
