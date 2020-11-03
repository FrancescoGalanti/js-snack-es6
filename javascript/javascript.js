/*
**javascript
**/




 // Jquerys //

 $(document).ready(function(){
   let bicicles = [
      {nome: 'bolt', peso: 25, colore: 'rosso'},
      {nome: 'mountainview', peso: 45, colore: 'nero'},
      {nome: 'feather', peso: 15, colore: 'giallo'}
  ];

  // var peso = 0;
  // let biciLeggera = [];
  let ligthCycle = null;
  bicicles.forEach(element => {
      if (ligthCycle == null || ligthCycle.peso > element.peso)  {
          ligthCycle = element;
      }
  });

  const {nome,peso} = ligthCycle;
      $('.content').html(
          `<div>
              <h3> Nome della bici più leggera: ${nome}</h3>
              <h4> Peso della bici più leggera: ${peso}</h4>
          </div>
          `
      );









 }); //<-- end here//
