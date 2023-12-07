chrome.runtime.sendMessage({function: "getDefaults"}, function(response) {

	var agency = response.agency;
	var username = response.username;
	var password = response.password;

	if (window.location.href.toLowerCase().match("/login/member")) {
		
		var agencyBox = document.querySelector('#Input_Agency');
		var userBox = document.querySelector('#Input_Username');
		var passBox = document.querySelector('#Input_Password');


		agencyBox.value = agency;
		userBox.value = username;
		passBox.value = password;

		document.querySelector("[name='Input.button']").click();

	}
	else if(window.location.href.toLowerCase().match('https://www.iamresponding.com/'))
	{
		if (document.getElementsByClassName("CookieConsent").length >= 1)
		{
			document.getElementsByClassName("CookieConsent")[0].getElementsByTagName('div')[1].getElementsByTagName('button')[0].click();
		}

		window.location.href = 'https://www.iamresponding.com/v3/Pages/memberlogin.aspx';
	}
});