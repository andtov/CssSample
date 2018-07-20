function paso1(){
    return new Promise(function (resolve, reject)
        {
            setTimeout(()=>{
                resolve([200]);
            }, 10000);
        })
}

function paso2(datos){
    return new Promise(function (resolve, reject)
        {
            setTimeout(()=>{
                resolve([...datos, 300]);
            }, 500);
        })
}

function paso3(datos){
    return new Promise(function (resolve, reject)
        {
            setTimeout(()=>{
                resolve(['Paso 3', datos]);
            }, 100);
        })
}

// paso1()
// .then(data => console.log(data))
// .catch(data => console.error(data));


// paso1()
// .then(function(algo) {
//     console.log(algo);    
//     paso2(algo).then(function(algo) {
//         console.log(algo);
//         paso3(algo).then(function(algo) {
//             console.log(algo);
//         })
//         .catch(data => console.error(data));
//     })
//     .catch(data => console.error(data));
// })
// .catch(data => console.error(data));

let final = function(){
    let paso1 = paso1();
    let paso2 = paso2();
    let paso3 = paso3();
}