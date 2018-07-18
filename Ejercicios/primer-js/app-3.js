let nombre = 'CARLOS';
let apellido = 'Perez'
let edad;
let anioNacimiento = 1991;

let datos = [{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
  }
]

//console.log(datos);


// Invertir el nombre

invertirNombre = function(){
  let invertedName = '';
  for(i = nombre.length;i > 0;i--){
    invertedName += nombre[i-1];
  }
  
  return invertedName;
}

upperString = function(str){
  return str.toUpperCase();
}

calcularEdad = function(age){
  return ((new Date()).getFullYear() - age);
}

summary = function(){

  console.log(`${invertirNombre().toLowerCase()} ${upperString(apellido)} y su edad es ${calcularEdad(anioNacimiento)}`);

}

getOddIds = function(element){
  return (element.id % 2) == 0;

}

summary();

console.log(datos.filter(getOddIds));

// console.log(invertirNombre().toLowerCase());
//
// console.log(upperString(apellido));
// edad = calcularEdad(anioNacimiento);
// console.log(edad);



// Mayusculas apellido


// Calcular Edad

// Funcion que retorne nombre completo y edad
// solrac (minuscula) PEREZ (mayuscula) y su edad es: 27

// fitrar los id pares retornando un array

//let $title = document.getElementById('title');
let $title = document.getElementsByClassName('list-group-item');

console.log($title);