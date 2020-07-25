class Animal{
    constructor(cantidadOjos,especie,edad){
        this.cantidadOjos=cantidadOjos;
        this.especie=especie;
        this.edad=edad;
    };
    comunicar(){
        return console.log('Me estoy comunicando');

    };
    alimentar(){
        return console.log('Me estoy alimentando, ñam ñam');

    }
};
let animalBasico1 = new Animal(2,'ave',2);
// class Mascota{
//     constructor(cantidadOjos,especie,edad,dueño,direccion,estaVacunado){
//         this.cantidadOjos=cantidadOjos;
//         this.especie=especie;
//         this.edad=edad;
//         this.dueño=dueño;
//         this.direccion=direccion;
//         this.estaVacunado=estaVacunado;

//     };
//     comunicar(){
//         return console.log('Me estoy comunicando');

//     };
//     alimentar(){
//         return console.log('Me estoy alimentando, ñam ñam');

//     };
//     darCariño(){
//         return console.log('Holi, te estoy dando cariño');
//     }
// };
// let perrito= new Mascota(1,'perro',2,'Pedro','Calle de la soledad 28',true);
// perrito.darCariño();+

//HERENCIA
class Mascota extends Animal{
    constructor(cantidadOjos,especie,edad,dueño,direccion,estaVacunado){
        super(cantidadOjos,especie,edad);
        this.dueño=dueño;
        this.direccion=direccion;
        this.estaVacunado=estaVacunado;

    };
    comunicar(){
        return console.log('Miauuuuu');
    }
}

let gatito = new Mascota(2,'gatito',4,'Jaime','Calle x 22',false);
console.log(gatito.cantidadOjos);
gatito.comunicar();