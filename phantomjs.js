var page = require('webpage').create();

page.open('http://192.168.183.201:9086/Kolkata10/WISHN/Login.jsp', function(status) {
	if (status !== 'success') {
    	console.log('Unable to access network');
  	} else {
		var ua = page.evaluate(function() {
    		// filling in username and password
			document.getElementsByName('Username')[0].value = 'your_username_here';
    		document.getElementsByName('Password')[0].value = 'your_password_here';

    		// initiating submit
    		$(':submit').click();

    	});
   	}
});

page.onUrlChanged = function(targetUrl) {
	if(targetUrl == 'http://192.168.183.201:9086/Kolkata10/WISHN/Home.jsp'){
		console.log('successfully logged in');
		phantom.exit();
	}
};