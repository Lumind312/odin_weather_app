async function getWeather(input) {
	// URL (required), options (optional)
	const link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'.concat(input, '?key=EW589PB8KFVP7Z6BEGAU4X8E3')
	console.log(input);
	console.log(link);

	const response = await fetch(link);
	const resp = await response.json();
	console.log(resp);
	
	document.getElementById("address").textContent = resp.resolvedAddress;
	document.getElementById("temp").textContent  = 'Temperature: ' + resp.currentConditions.temp + ' °F';
	document.getElementById("humid").textContent = 'Humidity: ' + resp.currentConditions.humidity + '%';
	document.getElementById("wind").textContent  = 'Wind: ' + resp.currentConditions.windspeed + ' mph';
}


document.getElementById("submit").addEventListener("click", (event) => {
	// get the string from input
	const input = document.querySelector("input").value;
	console.log(input);
	
	getWeather(input);
});

getWeather("london")