const miDiv = document.getElementById("card-neutron");
const minhaDiv = document.getElementById("card-eletron");
const mDiv = document.getElementById("card-proton");

function mudarDisplay() {
        
        if (minhaDiv.style.display === "none") {
          minhaDiv.style.display = "block";
          miDiv.style.display = "none";
          mDiv.style.display = "none";
        } else {
          minhaDiv.style.display = "none";
        }
      }
      function mudarDispla() {
        if (mDiv.style.display === "none") {
          mDiv.style.display = "block";
          minhaDiv.style.display = "none";
          miDiv.style.display = "none";
        } else {
          mDiv.style.display = "none";
        }
      }
      function mudarDisplai() {
        if (miDiv.style.display === "none") {
          miDiv.style.display = "block";
          minhaDiv.style.display = "none";
          mDiv.style.display = "none";
        } else {
          miDiv.style.display = "none";
        }
      }