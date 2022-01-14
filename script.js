var Partieel;
var Organisch;
var Anorganisch;
var Labo;
var Result = 0;
var Text = document.getElementById("Result");

function Calculate() {
  Partieel = document.getElementById("Partieel").value;
  Organisch = document.getElementById("Organisch").value;
  Anorganisch = document.getElementById("Anorganisch").value;
  Labo = document.getElementById("Labo").value;

  Result = (20*(5/6*(1/10*Partieel/20 + 9/10*(1/3*Organisch/35 + 2/3*Anorganisch/20)) + 1/6*Labo/20)).toFixed(2);

  if(Result < 8) {
      Text.style.color = "#fc0303";
  } else if (Result > 8 && Result < 10) {
      Text.style.color = "#fcba03";
  } else if (Result >= 10) {
      Text.style.color = "#41fc03";
  }

  Text.innerHTML = "Score: " + Result +" /20";
}
