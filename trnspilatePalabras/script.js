const palabras = ["uno", "dos", "tres", "cuatro", "osa", "cinco", "azul", "oso", "elefante","aro","ola"];

const palabrasFiltradas = palabras.filter(palabra => /^[o]/i.test(palabra) && palabra.length === 3);

alert(palabrasFiltradas);