let readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusF(celsius){
    return (celsius*9/5) +32;
}

rl.question('Ingrese la temperatura en grados celsius: ',(respuesta)=>{
    const celsius = parseFloat(respuesta);
    const Fahrenheit = celsiusF(celsius);
    console.log(`${celsius}°C es igual a ${Fahrenheit}°`)
    rl.close()
}, )
