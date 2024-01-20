/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// inquirer
// inquirer is a popular Node.js module that provides an easy way to interactively prompt users in the command line. It's often used to create interactive command-line interfaces (CLIs) by asking users questions and capturing their responses.

// qr-image
//qr-image is a Node.js module that allows you to generate QR codes easily
// Data you want to encode in the QR code
// const dataToEncode = "Hello, QR Code!";

// Generate QR code
// const qrCode = qr.image(dataToEncode, { type: "png" });

// Save the QR code as an image file
// qrCode.pipe(fs.createWriteStream("qrcode.png"));

// console.log("QR code generated successfully.");

import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";
inquirer
  .prompt([
    /* Pass your questions in here */
    { type: "input", name: "URL", message: "Type your url here: " },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("message.txt", url, (err) => {
      if (err) console.log(err);
      else {
        console.log("File written successfully\n");
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
