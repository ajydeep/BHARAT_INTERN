function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const celsiusResult = (fahrenheitInput - 32) * 5/9;
    document.getElementById('result').innerHTML = `${fahrenheitInput}°F is ${celsiusResult.toFixed(2)}°C`;
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitResult = (celsiusInput * 9/5) + 32;
    document.getElementById('result').innerHTML = `${celsiusInput}°C is ${fahrenheitResult.toFixed(2)}°F`;
}
