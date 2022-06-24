var kelvin = prompt('Insert the temperature in Kelvin.');
//Kelvin value of the today's forecast.
var celsius = kelvin - 273;
//Turn the kelvin value to celsius by substracting 273 from kelvin.
let fahrenheit = celsius * (9/5) + 32;
//Turn the celsius value to fahrenheit by multiplying it with 9/5 and adding 32.
fahrenheit = Math.floor(fahrenheit);
//Rounds the fahrenheit value.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

let newton = celcius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} newtons.`)