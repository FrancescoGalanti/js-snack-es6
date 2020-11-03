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


      const names = ['Franco', 'Luigi', 'Filippo', 'Alessandro', 'Adele', 'Alessia'];
      const arrayVal = names.length - 1;
      const min = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
      while (isNaN(min) || min < 1 || min > arrayVal) {
        min = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
      }
      const max = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
      while (isNaN(max) || max < min || max > arrayVal) {
        max = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
      }
      let newNames = [];
      newNames = names.filter( (element, index) => {
          if (index >= min && index <= max) {
              return element
        }
      });
    alert('I nomi selezionati nel range tra ' + min + ' e ' + max + ' sono:\n' + newNames);











 }); //<-- end here//
