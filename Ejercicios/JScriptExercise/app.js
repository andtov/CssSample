let person = function (nombre, puntosVida) {
    this.name = nombre;
    this.pv = puntosVida;
    this.sp = 100;
    this.curar = function (targetPerson){
        console.log(this);

        if(this.sp >= 40){
            targetPerson.pv += 40;
            this.sp -= 40;
        }
        else {
            console.warn('No tienes puntos de magia');
        }

        this.showStatus(targetPerson);
    };

    this.atacar = function (targetPerson){
        console.log(this);

        if(targetPerson.pv > 0){

            targetPerson.pv -= 20;

            if(targetPerson.pv <= 0){
                
                console.warn(`${targetPerson.name} esta muerto`);
            }
            else {
                console.log(`${targetPerson.name} sigue vivo`);
            }
        }
        else{
            console.error(`${targetPerson.name} no existe`);
        }

        this.showStatus(targetPerson);
    };
    this.showStatus = function(targetPerson){
        console.log(this);
        console.log(targetPerson);
    };
}

let gandalf = new person("Gandalf",100);
let legolas = new person("Legolas",20);

console.log(gandalf);
console.log(legolas);

gandalf.atacar(legolas);
gandalf.curar(legolas);
gandalf.atacar(legolas);
gandalf.atacar(legolas);
gandalf.atacar(legolas);
// gandalf.atacar(legolas);
// gandalf.atacar(legolas);




// function persona(name){

//     this.nombre = name;
//     this.edad = 20;
//     this.nombreEdad = function(){
//         console.log(`${this.nombre} (${this.edad})`);
//     };

// }

// let pedro = new persona('Pedro');

// console.log(pedro);
