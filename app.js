var http = require('http');
var myCore = require('./MyModule/core.js');
var myCommon = require('./MyModule/common.js');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end(getResponse());
});
server.listen(3001);

function getResponse(){
  var html = "<div><h3>";
  html = html + myCore.tellMeYourName() + ' - ' + myCore.tellMeYourResponsibilities();
  html = html + "</h3></div>";
  html = html + "<div><h3>";
  html = html + myCommon.tellMeYourName() + ' - ' + myCommon.tellMeYourResponsibilities();
  html = html + "</h3></div>";
  return html;
}