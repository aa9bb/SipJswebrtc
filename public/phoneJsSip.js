var sesion;
// esto seria un sip para recibir y realizar llamadas
var config = {
  "uri" : "usuario@servidor",
  "wsServers" : ["wss://192.168.2.250:4232"],
  "authorizationUser" : "2001",
  "password" : "2001abcd"
};
var userAgent = new SIP.UA(config);
//***************************************************
// esto es para enviar un Invite/llamada
var opciones = {
  "media" : {
    "constraints" : {
      "audio" : true,
      "video" : false
    },
    "render" : {
      "remote" : document.getElementById('remoteAudio'),
      "local" : document.getElementById('localAudio')
    }
  },
};
// esto es para que se reciba una llamada
userAgent.on('invite', function (session) {
  var atiendoSi = document.getElementById('answer');
  var atiendoNo = document.getElementById('doNotAnswer');

  atiendoSi.onclick = function(session) {
    session.accept({
        media: {
            render: {
                remote: document.getElementById('remoteAudio'),
                local: document.getElementById('localAudio')
            }
        }
    });
  };

  atiendoNo.onclick = function(session) {
    session.bye();
  };
});
// ***************************************************
// Envio de DTMF's          ------- No se entiende, revisar
/*
document.getElementById('1').addEventListener("click", function() { session.dtmf(1);}, false);
document.getElementById('2').addEventListener("click", function() { session.dtmf(2);}, false);
document.getElementById('3').addEventListener("click", function() { session.dtmf(3);}, false);
document.getElementById('4').addEventListener("click", function() { session.dtmf(4);}, false);
document.getElementById('5').addEventListener("click", function() { session.dtmf(5);}, false);
document.getElementById('6').addEventListener("click", function() { session.dtmf(6);}, false);
document.getElementById('7').addEventListener("click", function() { session.dtmf(7);}, false);
document.getElementById('8').addEventListener("click", function() { session.dtmf(8);}, false);
document.getElementById('9').addEventListener("click", function() { session.dtmf(9);}, false);
document.getElementById('0').addEventListener("click", function() { session.dtmf(0);}, false);
document.getElementById('*').addEventListener("click", function() { session.dtmf(*);}, false);
document.getElementById('#').addEventListener("click", function() { session.dtmf(#);}, false);
*/
// ***************************************************
