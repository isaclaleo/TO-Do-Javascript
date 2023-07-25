/*
Objetos

Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:

name con el valor del parámetro name
subscribers con el valor del parámetro subs
hash, con el valor de la longitud del string name multiplicado por el parámetro subs
Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.
*/

function createObject(name, subs) {
    // tu código aquí
    const newInfo = {
      name: name,
      subscribers: subs,
      hash: name.length * subs,
      getStatus: function() {
        return `El canal de ${this.name} tiene ${this.subscribers} suscriptores`
      }
    }
    return newInfo    
  }

  const sunsds = createObject("Miguel", 100)
  console.log("new", sunsds.getStatus())


  /*
  Atajos para trabajar con objetos


  
  */

  // ¿Qué se imprimirá en la consola al ejecutar el siguiente código:

  const person1 ={
    name: "isactes",
    age: 29,
    hobbies: [ "reading", "play Videogames", "music"]
    }

    const { age: personAge} = person

    console.log("Atajos de objectos", age)
    // Imprime age is not defined 

    // ¿Qué se imprimirá en la consola al ejecutar el siguiente código:

    const person2 = {
      name: "isactes",
      age: 29,
      hobbies: [ "reading", "play videogames", "music"]
    }

    const { weigth = 70, heigth =180 } = person2

    console.log("Atajos de objectos", weigth, heigth)
    // imprime los valores que le asignamos a las const ya que no existen en nuestro array person2