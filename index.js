// Royalbets ModernUI v1.0
// Criado por João Pedro G.S.
// 12h01.github.io/
// twitter.com/12h01

/* Eu não permito (nem recomendo) que você use meu código
sem minha autorização. Porém eu o disponibilizo aqui para servir
de inspiração para que você crie o seu próprio tema.

Sources:
W3CSS - https://www.w3schools.com/w3css/
Toastr - http://www.toastrjs.com/

jQuery é requerido, mas no caso ele já está incluso no código-fonte do Royalbets.

Para aplicar esse código, eu usei a extensão 'cjs' para Chrome.
https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija/
*/

// Toastr
$('head').append("<link href='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css' rel='stylesheet'/>");
$('head').append("<script src='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js'></script>");

// Fonte "Didact Gothic", do Google
$('head').append("<link href='https://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet'>");

// W3CSS
$('head').append("<link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css'>");

// Remover elementos da página
$('tr#header > td').remove();
$('div#content_direito').remove();
$('img#logo').remove();
$('div#footer').remove();
$('span.botao').remove();
$('a#hpyAltSenha').remove();
$('a#lnkSair').remove();
$('div#panelMenu').remove();
$('span#lblBoasVindas').remove();
$('#hpyTab').remove();
$('#hpyApp').remove();
$('table tbody tr td').slice(1, 1).remove();

// Criar botão "Ver bilhete"
$('body').append("<button onclick='document.getElementById(\"id01\").style.display=\"block\"' class='w3-button w3-green btnbilhete w3-block'>Ver bilhete</button>");

// Criar modal para a página do bilhete
$('body').append("<div id='id01' class='w3-modal'><div class='w3-modal-content w3-card-4 w3-container'><h3 class='w3-bar-item'>Bilhete de Apostas</h3><span onclick='document.getElementById(\"id01\").style.display=\"none\"' class='w3-button w3-display-topright'>&times;</span><center><div id='paste_div' class='w3-container'>&nbsp;</div></div></center></div>");

// Mover a div do bilhete para o modal
$($("div.CenterColumn").detach()).appendTo("#paste_div");

// Criar botões "Jogos de hoje" e "Jogos de amanhã" na topbar
$('body').append("<li id='teste_1'><a href='javascript:ConsultarJogos(-2)'>Jogos de Hoje</a></li>");
$('body').append("<li id='teste_2'><a href='javascript:ConsultarJogos(-3)'>Jogos de Amanh&atilde;</a></li>");
$($("li#teste_2").detach()).prependTo("ul#header");
$($("li#teste_1").detach()).prependTo("ul#header");

// Toast ao adicionar/remover jogos no bilhete
$("#lbNJogos").on('DOMSubtreeModified', function () {
  var jg = $(this).html();
  if (jg>0){
    setTimeout(
      function(){
        var p = document.getElementById('lbVlPremio').innerHTML;
        toastr.success('Jogos no bilhete: '+jg+' <br> Retorno: R$'+p);
      }, 50);
  }
});

// Colocar R$2 como valor padrão ao abrir o site
document.getElementById('EditVlAposta').value = '2';

// Fim! :)
