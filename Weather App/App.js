window.addEventListener('load', () => {
	let long;
	let lat;
  
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(position => {
		long = position.coords.longitude;
		lat = position.coords.latitude;
  
		const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0735234e5ecd163762dfa025a9b43679&units=imperial`
		
		fetch(api)
		  .then(response => {
			if (response.ok) {
			  return response.json();
			}
		  })
		  .then(data => {
			console.log(data);
		  })
	  });
	}
  });
