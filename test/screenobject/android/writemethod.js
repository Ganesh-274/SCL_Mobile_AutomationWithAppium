const fs = require('fs');
// let data = "This is a file containing a collection of books.";
async function writemethod(data){
    fs.writeFile("C:/WebdriverAppium/test/screenobject/android/ordernumber.txt", data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
        //   console.log(fs.readFileSync("books.txt", "utf8"));
        }
      });
}
module.exports = writemethod;
