function convert() {
	var celsius = document.getElementById("celsius").value;
	var fahrenheit = document.getElementById("fahrenheit").value;
	var kelvin = document.getElementById("kelvin").value;

	if (celsius !== "") {
		var convertedFahrenheit = (celsius * 9/5) + 32;
		var convertedKelvin = parseFloat(celsius) + 273.15;
		document.getElementById("fahrenheit").value = convertedFahrenheit.toFixed(2);
		document.getElementById("kelvin").value = convertedKelvin.toFixed(2);
	} else if (fahrenheit !== "") {
		var convertedCelsius = (fahrenheit - 32) * 5/9;
		var convertedKelvin = (parseFloat(fahrenheit) + 459.67) * 5/9;
		document.getElementById("celsius").value = convertedCelsius.toFixed(2);
		document.getElementById("kelvin").value = convertedKelvin.toFixed(2);
	} else if (kelvin !== "") {
		var convertedCelsius = parseFloat(kelvin) - 273.15;
		var convertedFahrenheit = (parseFloat(kelvin) * 9/5) - 459.67;
		document.getElementById("celsius").value = convertedCelsius.toFixed(2);
		document.getElementById("fahrenheit").value = convertedFahrenheit.toFixed(2);
	} else {
		document.getElementById("result").innerHTML = "Please enter a value";
	}
}