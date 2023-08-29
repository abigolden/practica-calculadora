/* Crear una clase llamada CalculadoraDeDosNumeros que reciba en su 
constructor dos números y los guarde usando el atributo “this” de la clase
Crear un método llamado “sumar” que guarde la suma de los dos números.
Crear un método llamado “restar” que guarde la resta de los dos números
Crear un método llamado “multiplicar” que guarde el producto de los dos números.
Crear un método llamado “dividir” que guarde el cociente de los dos números
Crear un método llamado “imprimir” que imprima el último resultado guardado
Crear un método llamado “obtenerPrimerOperando” que retorne el primer operando de la calculadora.
Crear un método llamado “obtenerSegundoOperando” que retorne el segundo operando de la calculadora.
*/



  
class calculadoraDeDosNumeros {
  constructor(primerOperando, segundoOperando) {
    this.primerOperando = primerOperando;
    this.segundoOperando = segundoOperando;
    this.resultado = null; 
  }
  imprimir() {
    if (this.resultado !== null) {
      console.log(this.resultado);
    }
  }
  sumar() {
    this.resultado = this.primerOperando + this.segundoOperando;
  }

  restar() {
    this.resultado = this.primerOperando - this.segundoOperando;
  }
  multiplicar() {
    this.resultado = this.primerOperando * this.segundoOperando;
  }
  dividir() {
    this.resultado = this.primerOperando / this.segundoOperando;
  }

  obtenerPrimerOperando() {
    return this.primerOperando;
  }
  obtenerSegundoOperando() {
    return this.segundoOperando;
  }
}
 


  const calculadora = new calculadoraDeDosNumeros(2, 4);
    
  calculadora.imprimir() // 6
  calculadora.sumar()
  
  calculadora.restar()
  calculadora.imprimir() // -2

  calculadora.multiplicar()
  calculadora.imprimir() // 8

  calculadora.dividir()
  calculadora.imprimir() // 0.5

  console.log(calculadora.obtenerPrimerOperando()); // 2
  console.log(calculadora.obtenerSegundoOperando()); // 4

