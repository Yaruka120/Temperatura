function converterCelsiusParaFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        document.getElementById('resultadoCelsius').innerText = "Por favor, insira um número válido.";
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('resultadoCelsius').innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
}

function converterFahrenheitParaCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        document.getElementById('resultadoFahrenheit').innerText = "Por favor, insira um número válido.";
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('resultadoFahrenheit').innerText = `${fahrenheit}°F é igual a ${celsius.toFixed(2)}°C`;
}