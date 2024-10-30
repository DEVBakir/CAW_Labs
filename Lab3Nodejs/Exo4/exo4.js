const fileReadWrite = require('fs')
fileReadWrite.writeFileSync(process.argv[2],process.argv[3])
const fileContent =fileReadWrite.readFileSync(process.argv[2], "utf-8")
console.log(fileContent);


// node .\Exo4\exo4.js .\Exo4\file.txt  "hi i am bakir"