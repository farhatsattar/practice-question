// 28:Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
var fahrenheitTemp = [25, 38, 45, 50];
function fahrenheitToCelsius(fahrenheitTemp) {
    var celsiusTemperatures = fahrenheitTemp.map(function (fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    });
    console.log("Fahrenheit Temperatures:", fahrenheitTemp.join(", "));
    console.log("Celsius Temperatures:", celsiusTemperatures.join(", "));
}
fahrenheitToCelsius(fahrenheitTemp);
