var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
var unixPrint = require("unix-print");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

// GET printers status for debugging purposes
router.get("/printers_status", async (req, res) => {
  const printerInfos = await unixPrint.getPrinters();
  res.json(printerInfos);

});

router.post("/print_pdf", async (req, res) => {
  // If no files, send an error to frontned
  if (!req.files || req.files.length === 0) {
    res.json({ result: false, error: "Please include pdf documents to print" });
    return;
  }

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
    res.json({ result: false, error: "The printer is offline", printerInfos });
    return;
  }

  // Save the PDF files to a tmp folder
  // I prefer to treat this as an array, in case we want to print multiple files at a time.
  // This way it works for 1 or more documents.
  for (let i = 0; i < req.files.fromFront.length; i++) {
    // Create a temp fileName and save the file
    const tmpFilePath = path.join(
      __dirname,
      `../tmp/${Math.random().toString(36).substring(7)}.pdf`
    );
    fs.writeFileSync(tmpFilePath, req.files.fromFront[i].data, "binary");
    // Print the file
    try{
      await unixPrint.print(tmpFilePath, printerInfos.printer);
    } catch(err){
      console.log(err);
      res.json({result: false, error: err})
      return;
    }
    // Delete the file
    fs.unlinkSync(tmpFilePath);
  }

  res.json({result:true, success:"Your files have successfully been sent to printer"})


});
module.exports = router;
