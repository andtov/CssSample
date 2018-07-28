let datos;
let url = 'https://jsonplaceholder.typicode.com/users';

let usuarios = [{
   "id": 1,
   "name": "Leanne Graham",
   "username": "Bret",
   "email": "Sincere@april.biz",
   "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
           "lat": "-37.3159",
           "lng": "81.1496"
       }
   },
   "phone": "1-770-736-8031 x56442",
   "website": "hildegard.org",
   "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
   }
},
{
   "id": 2,
   "name": "Ervin Howell",
   "username": "Antonette",
   "email": "Shanna@melissa.tv",
   "address": {
       "street": "Victor Plains",
       "suite": "Suite 879",
       "city": "Wisokyburgh",
       "zipcode": "90566-7771",
       "geo": {
           "lat": "-43.9509",
           "lng": "-34.4618"
       }
   },
   "phone": "010-692-6593 x09125",
   "website": "anastasia.net",
   "company": {
       "name": "Deckow-Crist",
       "catchPhrase": "Proactive didactic contingency",
       "bs": "synergize scalable supply-chains"
   }
}

]
let cityProperty = ['city'];

let properties = ['name','email','address','phone','company']

// axios.get(url)
//     .then((response)=>{
//         console.log(response.data);
//     })
//     .catch(data => console.log(data));

// function obtenerDatos(){
//     fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//     })
//     .catch(data => console.log(data));
// }

//obtenerDatos(url);

function createElement(element, className){
    return new Promise(function (resolve, reject)
        {
            let $docElement = document.createElement(element);
            $docElement.className = className;
 
            resolve($docElement);
           
        })
 }

let $div = document.getElementById('content-data');

function obtenerDatos(data){
    data.forEach(function(element) {
       createElement('div','div mr-3 ml-3')
       .then((data) => {
           createElement('ul','list-group')
               .then((group) => {

                   properties.forEach(function(property){

                       createElement('li','list-group-item')
                       .then((item) => {
                            if(property === 'address'){
                                item.innerText = element[property].city;
                            }
                            else if(property === 'company'){
                                item.innerText = element[property].name;
                            }
                            else{
                                item.innerText = element[property];
                            }
                           
                           group.appendChild(item);
                       })

                   });

                   data.appendChild(group);
               })
               
        $div.appendChild(data);
       
    })
       .catch((data) => console.error(data))
});
}

function obteneruriDatos(){
    fetch(url)
    .then((response) => {
        return response.json();
    }).then((data) => {
        obtenerDatos(data);
    })
    .catch(data => console.log(data));
}

//obtenerDatos(usuarios);
obteneruriDatos();



