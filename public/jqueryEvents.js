
var valor = [];
/*document.addEventListener("keypress", KeyCheck, true);
function KeyCheck(event) {
  debugger;
   var KeyID = event.keyCode;
   switch(KeyID) {
      case 8:
      valor.pop();
      console.log(valor);
      break;
      default:
      break;
   }
}*/

$(function(){
  $("#2").click(function(){
  /*  debugger;
    valor.concat($(this).val());
    for(var a in valor) {
      $("#numberToCall").val(valor[a]);
    }*/
  });
  $("#call").click(function(){
    //termino de mandar el invite/llamada
     sesion = userAgent.invite("sip: usuario@servidor", opciones);
  });
  $("#endCall").click(function(){
    //finalizo el invite/llamada
     userAgent.bye();
     alert("Call Ended");
  });
});
