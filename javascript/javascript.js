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

  const classe = [   "francesco",   "chiara",   "marco", "davide",   "Federico",  ];

  const totaleNomi = classe.length;

  // ask user the range

  const min = parseInt(prompt("Scegli un numero dell indice da 0 a " + totaleNomi) );
  const max = parseInt(prompt("Scegli un altro numero dell indice maggiore od uguale al precedente compreso fra 0 e " + totaleNomi) );

  // generate a new array

  const list = classe.filter((element, index) => {

      if (index >= min && index <= max){
          return element
      }
  });

  console.log(list);


    // terzo esercizio //

//     const condominio = [
//     {famiglia: 'Rossi', componenti: 4},
//     {famiglia: 'Verdi', componenti: 2},
//     {famiglia: 'Bianchi', componenti: 4},
//     {famiglia: 'Gialli', componenti: 8}
//   ]
//   let condscala = [];
//
//   condscala = condominio.map( (element) => {
//     return {
//         ...element, // QUI USO LO SPREAD
//         scala: generateScala()
//         }
// });
//
//
//
//
//   console.table(condominio);
//   console.table(condscala);
//
//   //Function Scala
//
//   function generateScala() {
//     let scale = 'abc';
//     let scala = scale[randScala(0, scale.length - 1)];
//
//     return scala;
//   }
//
//   function randScala(min,max) {
//     return Math.floor (Math.random() * max - min + 1 ) + min;
//   }












 }); //<-- end here//
