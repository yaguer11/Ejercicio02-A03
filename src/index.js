const readline = require('readline');

// Definición de la clase Calculadora
class Calculadora {
  constructor() {
    this.leer = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  // Métodos de la clase Calculadora para realizar operaciones matemáticas
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      return "No es posible dividir por cero.";
    }
    return a / b;
  }

  // Método principal de la calculadora que contiene la lógica del programa
  realizarOperacion() {
    console.log("*****************************");
    console.log("***     CALCULADORA       ***");
    console.log("*****************************");

    this.leer.question("Ingrese el primer número: ", (num1) => {
      this.leer.question("Ingrese el segundo número: ", (num2) => {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        console.log("  Seleccione una operación:");
        console.log("   (1) Suma");
        console.log("   (2) Resta");
        console.log("   (3) Multiplicación");
        console.log("   (4) División");

        this.leer.question("Elija una opción: ", (opcion) => {
          switch (opcion) {
            case '1':
              console.log(`Resultado: ${this.sumar(num1, num2)}`);
              break;
            case '2':
              console.log(`Resultado: ${this.restar(num1, num2)}`);
              break;
            case '3':
              console.log(`Resultado: ${this.multiplicar(num1, num2)}`);
              break;
            case '4':
              console.log(`Resultado: ${this.dividir(num1, num2)}`);
              break;
            default:
              console.log("Opción no válida.");
          }

          const validarRespuesta = (respuesta) => {
            if (respuesta.toUpperCase() === 'S') {
              this.realizarOperacion(); // Recursión para realizar otra operación
            } else if (respuesta.toUpperCase() === 'N') {
              console.log("Hasta pronto!");
              this.leer.close(); // Cierre de la interfaz de lectura
            } else {
              console.log("Opción no válida. Por favor, ingrese 'S' o 'N'.");
              this.leer.question("Ingrese una opción (S/N): ", validarRespuesta);
            }
          };

          console.log("¿Desea realizar otra operación?");
          this.leer.question("Ingrese una opción (S/N): ", validarRespuesta);
        });
      });
    });
  }
}

// Creación de una instancia de la clase Calculadora
const calculadora = new Calculadora();

// Llamada al método principal para iniciar la calculadora
calculadora.realizarOperacion();
