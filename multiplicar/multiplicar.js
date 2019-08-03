const fs = require('fs'); // crear archivos text
const color = require ('colors')


let listarArchivo = (base, limite) => {

   
    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);
        for(let i=1; i<=limite ; i++){

            data = `${base}* ${i} = ${base*i}\n`
        
        console.log(data)

        }
 
}

let crearArchivo=(base, limite) =>{
    return new Promise ( (resolve,reject) => {
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data ='';

        for(let i=1; i<=limite ; i++){

            data += `${base}* ${i} = ${base*i}\n`
        
        console.log(data)
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data , (err) => {
            if (err) 
                reject (err)
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`);
            
        });
    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}
 