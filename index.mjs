import { clear } from 'console'
import {Calculadora} from './clase.mjs'
import { input } from './utils.mjs'

while (true){
    console.log(`
        Calculadorovich 

        1- sumar
        2- restar
        3- multiplicar
        4- dividir
        5- resto
        6- potencia
        7- salir
        `)
    const opcion = await input("Seleccioná una opcion: ")
        
    if(opcion === "1"){
        console.log(clear)
        const num1 = Number(await input("Ingrese el primer numerito: "))
        const num2 = Number(await input("Ingrese el segundo numerovich: "))
        console.log(num1 + num2)
        await input("Presione cualquier tecla para continuar...")
    }
    else if(opcion === "2"){
        console.log(clear)
        const num1 = Number(await input("Ingrese el primer numerito: "))
        const num2 = Number(await input("Ingrese el segundo numerito: "))
        console.log(num1 - num2)
        await input("Precione cualquier tecla para continuar...")
    }
    else if(opcion === "3"){
        console.log(clear)
        const num1 = Number(await input("Ingrese el primer numerito: "))
        const num2 = Number(await input("Ingrese el segundo numerito: "))
        console.log(num1 * num2)
        await input("Precione cualquier tecla para continuar...")
    }
    else if(opcion === "4"){
        console.log(clear)
        const num1 = Number(await input("Ingrese el primer numerito: "))
        const num2 = Number(await input("Ingrese el segundo numerito: "))
        console.log(num1 / num2)
        await input("Precione cualquier tecla para continuar...")
    }
    else if(opcion === "5"){
        console.log(clear)
        const num1 = Number(await input("Ingrese el primer numerito: "))
        const num2 = Number(await input("Ingrese el segundo numerito: "))
        console.log(num1 % num2)
        await input("Precione cualquier tecla para continuar...")
    }
    else if(opcion === "6"){
        console.log(clear)
        const num1 = Number(await input("Ingrese el primer numerito: "))
        const num2 = Number(await input("Ingrese el segundo numerito: "))
        console.log(num1 ** num2)
        await input("Precione cualquier tecla para continuar...")
    }
    else if (opcion === "7"){
        console.log(clear)
        console.log("Saliendo del programa...")
        process.exit()
    }
}