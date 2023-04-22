function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let mono = document.getElementById("mono");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado";
      parrafo.textContent = "";
      mono.src = "./imag/encriptado.jpg";
    } 
    else {
        mono.src = "./imag/mono.png";
        tituloMensaje.textContent = "Mensaje no encontrado";
        parrafo.textContent = "Ingresa el texto";
        swal("Debes ingresar un texto", "warning");
      }
    }
    function desencriptar() {
        let texto = document.getElementById("texto").value;
        let tituloMensaje = document.getElementById("titulo-mensaje");
        let parrafo = document.getElementById("parrafo");
        let mono = document.getElementById("mono");
      
        let textoCifrado = texto
          .replace(/enter/gi, "e")
          .replace(/imes/gi, "i")
          .replace(/ai/gi, "a")
          .replace(/ober/gi, "o")
          .replace(/ufat/gi, "u");

          if (texto.length != 0) {
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto desencriptado";
            parrafo.textContent = "";
            muñeco.src = "./imag/desencriptado.jpg";
          }
          else {
            mono.src = "./imag/mono.png";
            tituloMensaje.textContent = "Mensaje no encontrado";
            parrafo.textContent = "Ingresa el texto";
            swal("Debes ingresar un texto", "warning");
          }
      }