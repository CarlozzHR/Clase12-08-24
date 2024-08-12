let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function maximoDeTres(n1,n2,n3){
    return Math.max(n1,n2,n3);
}
rl.question('Ingrese el primer numero : ',(repuesta1)=>{
    rl.question('Ingrese el numero : ', (respuesta2)=>{
        rl.question('Ingrese el numero 3 : ', (respuesta3)=>{

            const num1 = parseFloat(respuesta1)
            const num2 = parseFloat(respuesta2)
            const num3 = parseFloat(respuesta3)

            const maximo = maximoDeTres(num1,num2,num3);

        console.log(`El numero mayor entre ${num1}, ${num2} y ${num3} es ${maximo}`);
        rl.close();
        });
    });
});
