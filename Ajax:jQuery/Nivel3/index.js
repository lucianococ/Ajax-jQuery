  var contenido = document.querySelector('#contenido')
  function showJoke(){
    fetch('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      contenido.innerHTML = `<p>${data.value.joke}</p>`
     
     
      
      })
 }