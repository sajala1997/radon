const printDate = function() {
    console.log(new Date())
}

const printMonth = function() {
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
console.log(name)
    // console.log(getMonth())
}

const getBatchInfo = function() {
    console.log("Radon, Week3Day3, The topic being taught today is Node.js, Module, route etc")
}


module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo