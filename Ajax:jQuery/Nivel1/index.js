
//  var contenido = document.querySelector('#contenido')
//  function showJoke(){
//    fetch('http://api.icndb.com/jokes/random')
//    .then(res => res.json())
//    .then(data => {
//      console.log(data)
//      contenido.innerHTML = `<p>${data.value.joke}</p>`
     
     
      
//      })
//  }


$( document ).ready(function(){
  
  
     $('#chiste').click(function (e) {
           $.ajax({
              url:'http://api.icndb.com/jokes/random',
              type:'get',
              dataType:'json'
           }).then(data => {
     console.log(data.value.joke)
     contenido.innerHTML = `<p>${data.value.joke}</p>`
     
     
      
    });
  });
}); 
   