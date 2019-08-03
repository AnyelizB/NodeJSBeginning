const argv = require('./config/yargs').argv;
const color = require ('colors')
const colors = require ('colors/safe')

const {crearArchivo} = require('./multiplicar/multiplicar')
const {listarArchivo} = require('./multiplicar/multiplicar')

let comando= argv._[0];

switch(comando){
  case 'listar':
      listarArchivo(argv.base, argv.limite)  
     
    
    //console.log('Listar');
  break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
    .then(archivo =>console.log(`Archivo creado:`, colors.red(archivo)))
    .catch(e=> console.log(e));
    //console.log('Crear');
  break;
  default:
    console.log('Comando no reconocido')
}
//let base = 3;
console.log(argv)

// console.log(process.argv)
let argv2= process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1] //capturar la base
//console.log('Limite', argv.limite)

  // crearArchivo(base)
  //   .then(archivo =>console.log(`Archivo creado: ${archivo}`))
  //   .catch(e=> console.log(e));
