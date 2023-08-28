var heart = document.getElementById('heart-button')
         heart.addEventListener('mouseenter', entrar)
         heart.addEventListener('mouseout', sair)
           function entrar(){
            heart.style.background = 'black'
           }
           function sair(){
            heart.style.background = 'white'
           }