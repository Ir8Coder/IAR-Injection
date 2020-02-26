chrome.runtime.sendMessage({function: "getDefaults"}, function(response) {

	var agency = response.agency;
	var username = response.username;
	var password = response.password;
	var dashboard = response.dashboard;

	if (window.location.href.toLowerCase().match("/v3/pages/memberlogin.aspx")) {
		var agencyBox = document.querySelector('#ddlsubsciribers');
		var userBox = document.querySelector('#memberfname');
		var passBox = document.querySelector('#memberpwd');

		document.querySelector("#login").addEventListener('click', function () {

		    	agencyBox.value = agency;
				userBox.value = username;
				passBox.value = password;

		},false);

		document.querySelector("#login").click();

	}
	else if (window.location.href.toLowerCase().match("/v3/agency/incidentsdashboard.aspx")) { if (dashboard == "default") window.location.href = 'https://www.iamresponding.com/v3/agency/def.aspx'; }
	else if (window.location.href.toLowerCase().match("/v3/agency/def.aspx")) { if (dashboard == "incident") window.location.href = 'https://www.iamresponding.com/v3/agency/incidentsdashboard.aspx'; }
	else window.location.href = 'https://www.iamresponding.com/v3/Pages/memberlogin.aspx';
});