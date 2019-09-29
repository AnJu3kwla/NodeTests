const os=require('os');

var totalMemory=os.totalmem();
var freeMemory =os.freemem();

//Template string
console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);