const data1 = require("./src/data/file1");
const data2 = require("./src/data/file2");
const data3 = require("./src/data/file3");

// merge all
const allData = {
      ...data1,
      ...data2,
      ...data3,
};

const total = Object.keys(allData).length;

console.log("Total JSON entries:", total);
console.log("Missing:", 127 - total);