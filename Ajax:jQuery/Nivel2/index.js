
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


