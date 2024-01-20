// npm init
// The npm init command is used to initialize a new Node.js project and create a package.json file, which is a metadata file that describes your project and its dependencies. The package.json file is crucial for managing dependencies, scripts, and other project-related information.

// File system

// Node.js uses CommonJS modules by default for module loading, which involves using require to import modules. However, starting from Node.js version 13.2.0 and later, you can use ECMAScript Modules (ESM) syntax, including the import statement, by using the .mjs file extension or by setting the "type" field to "module" in your package.json file.
// you can add the "type": "module" field to your package.json file and then run the file

// fs.write()
import fs from "fs";
let data = "This is node.js tutorial.";
fs.writeFile("message.txt", data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully");
  }
});

// fs.read()
import fs from "fs";
fs.readFile("message.txt", "utf8", function (err, data) {
  console.log(data);
});
