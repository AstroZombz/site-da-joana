//console.log("hello world");
//alert("cuidado ao entrar");

/*
var x = 0;

while(x<5)
{
    x++;
    alert("fucks given: " + x);
} 
*/
var currentPhotoIndex = 0;

function ModFixed(a,b) {
    return ((a % b) + b) % b;
}

function moveSlideshow(delta){
    //andar para a frente ou para trás
    currentPhotoIndex = currentPhotoIndex + delta;

    var intervalo = ModFixed(currentPhotoIndex, 2);
    var intervaloPuxadoParaFrente = intervalo +1;

    //gerar a string e aparecer o popup 
    var mensagem = "images/" + intervaloPuxadoParaFrente + ".jpg";
    
    var imageElement = document.getElementsByClassName("slideshow-image")[0];
    imageElement.src= mensagem;
} 

