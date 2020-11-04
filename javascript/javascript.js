/*
**javascript
**/


 // Jquerys //

 $(document).ready(function(){

   // primo esercizo //
  //  let bicicles = [
//     {nome: 'bolt', peso:  25, colore: 'rosso'},
  //     {nome: 'mountainview', peso: 45, colore: 'nero'},
  //     {nome: 'feather', peso: 15, colore: 'giallo'}
  // ];
  //
  // // var peso = 0;
  // // let biciLeggera = [];
  // let ligthCycle = null;
  // bicicles.forEach(element => {
  //     if (ligthCycle == null || ligthCycle.peso > element.peso)  {
  //         ligthCycle = element;
  //     }
  // });
  //
  // const {nome,peso} = ligthCycle;
  //     $('.content').html(
  //         `<div>
  //             <h3> Nome della bici più leggera: ${nome}</h3>
  //             <h4> Peso della bici più leggera: ${peso}</h4>
  //         </div>
  //         `
  //     );

  // const classe = [   "francesco",   "chiara",   "marco", "davide",   "Federico",  ];
  //
  // const totaleNomi = classe.length;
  //
  // // ask user the range
  //
  // const min = parseInt(prompt("Scegli un numero dell indice da 0 a " + totaleNomi) );
  // const max = parseInt(prompt("Scegli un altro numero dell indice maggiore od uguale al precedente compreso fra 0 e " + totaleNomi) );
  //
  // // generate a new array
  //
  // const list = classe.filter((element, index) => {
  //
  //     if (index >= min && index <= max){
  //         return element
  //     }
  // });
  //
  // console.log(list);


    // terzo esercizio //

    var myarray = [
    {name: "Francesco", type:"tshirt", color:"red"},
    {name: "Dario", type: "scooter", color: "blue"},
    {name: "CrissCross", type: "scarpe", color: "yellow"},
    {name: "Jenny", type: "borsa", color:"white"},

];

console.log(myarray);

const newarray = myarray.map(element => {
    return {
        ...element,
        position: generatePosition()
    }
});

console.table(newarray);






function generatePosition(){
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var letter = letters[Math.floor(Math.random() * (letters.length - 1) + 1)];

  return letter;
}













 }); //<-- end here//
