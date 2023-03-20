function mudarDisplay() {
        const minhaDiv = document.getElementById("card-eletron");
        if (minhaDiv.style.display === "none") {
          minhaDiv.style.display = "block";
        } else {
          minhaDiv.style.display = "none";
        }
      }
      function mudarDispla() {
        const minhaDiv = document.getElementById("card-proton");
        if (minhaDiv.style.display === "none") {
          minhaDiv.style.display = "block";
        } else {
          minhaDiv.style.display = "none";
        }
      }
      function mudarDisplai() {
        const minhaDiv = document.getElementById("card-neutron");
        if (minhaDiv.style.display === "none") {
          minhaDiv.style.display = "block";
        } else {
          minhaDiv.style.display = "none";
        }
      }

      if( minhaDiv==="card-neutron"|| minhaDiv==="card-neutron" || minhaDiv==="card-neutron" ){
      var posicaoInicial = {x: 0, y: 0};
      var posicaoAtual = {x: 0, y: 0};
      var mousePressionado = false;
      
      minhaDiv.addEventListener("mousedown", function(e) {
        posicaoInicial.x = e.clientX;
        posicaoInicial.y = e.clientY;
        mousePressionado = true;
      });
      
      document.addEventListener("mousemove", function(e) {
        if (mousePressionado) {
          posicaoAtual.x = e.clientX;
          posicaoAtual.y = e.clientY;
          var deltaX = posicaoAtual.x - posicaoInicial.x;
          var deltaY = posicaoAtual.y - posicaoInicial.y;
          minhaDiv.style.left = (minhaDiv.offsetLeft + deltaX) + "px";
          minhaDiv.style.top = (minhaDiv.offsetTop + deltaY) + "px";
          posicaoInicial.x = posicaoAtual.x;
          posicaoInicial.y = posicaoAtual.y;
        }
      });
      
      document.addEventListener("mouseup", function(e) {
        mousePressionado = false;
      });
    }