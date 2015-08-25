var request = require('request');
var Q = require('q');
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
var CronJob = require('cron').CronJob;

var loginUrl = 'http://192.168.183.201:9086/Kolkata10/WISHN/Login.jsp';
var homeUrl = 'http://192.168.183.201:9086/Kolkata10/WISHN/Home.jsp';
var checkTime = '00 */5 * * * *'; // every 5 mins

function isLoggedIn(){
	var deferred = Q.defer();

	request({url: loginUrl ,followRedirect :false}, function (error, response, body) {
    	console.log(response.headers.location);
    	if(response.headers.location==homeUrl){
    		deferred.resolve();
    	}
    	else{
    		deferred.reject();
    	}
	});	

	return deferred.promise;
}

function login(username, password){
	var deferred = Q.defer();

	var childArgs = [
  		path.join(__dirname, 'phantomjs.js'),
  		''
	];
 
	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
		console.log(stdout);
		deferred.resolve();
	});

	return deferred.promise;
}

var job = new CronJob(checkTime, function(){
	isLoggedIn().then(function(){
	
	},function(){
		console.log('=== Logout detected at '+new Date());
		login().then(function(){
		
		});
	});    
}, null, true, "Asia/Kolkata");

