$(document).ready(function(){
    let slideAtual = 1
    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]

    setInterval(mudarSlide, 2000);

    function mudarSlide(){
        //remover slider anterior
        if (slideAtual > 0){
            $("#carrossel").removeClass(listaSlides[slideAtual -1])
        }
        else{
            $("#carrossel").removeClass(listaSlides[listaSlides.length -1])
        }
        
        //exibir slider atual
        $("#carrossel").addClass(listaSlides[slideAtual])

        //indicar slider atual
        console.log("Slide atual é: ",slideAtual)
        slideAtual ++

        if (slideAtual > listaSlides.length -1){
            slideAtual = 0
        }

    }




    $("#barras").click(function(){
        if ($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")
        }
        else{
            $("#menu").addClass("menu-ativo")
        }
        
    })
})






function cadastrarNewsletter(){
    //alert("CadastrarNewsletters")
        //let numero1=5
        //let numero2=10
        //let resultado= numero1 + numero2
        //console.log(resultado)
    let email = document.getElementById("campo-email").value
    alert (email)
}

function mostrarMenu($event) {
    //identificar elemento do menu
    let menu = document.getElementById("menu")

    //if(menu.style.display == "none"){
    if(getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }
        event.preventDefault();

    
  
}
