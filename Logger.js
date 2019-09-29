var url='http://mylogger.io/log';

function log(message){
    //send a http request
    console.log(message);
}
module.exports.logEx=log;
