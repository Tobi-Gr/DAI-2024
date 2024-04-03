import { getCurrency } from 'currency-map-country';
let codigoPais = 'USD';
let monedaDelPais = ObtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function ObtenerMoneda(codigoPais)
{
    let currency = getCurrency(codigoPais);
    return currency.name;
}