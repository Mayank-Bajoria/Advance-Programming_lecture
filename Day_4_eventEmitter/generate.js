const fs = require("fs")

fs.writeFileSync("big_data.csv","id,userName,orderValue\n");

for(let i = 1; i <= 500_000; i++){
  fs.appendFileSync("big_data.csv", `${i},username${i},${Math.random()*100}`)
}