var url = 'http:.....';
function log(massage){
    // send an HTTP request
    console.log(massage);
}

module.exports.log = log;
//module.export.url = url; 
// x because we want url to be private
// made mistake didnt add use "export" instided of "exports" 