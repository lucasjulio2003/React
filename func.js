function validar(){
  let ok = true;
  let nome = document.getElementById("nome").value;
  let texto = "";
  if(!nome){
    texto += "Coloque o nome!\n";
    ok = false;
  }
  let idade = document.getElementById("idade").value;
  if(!idade){
    texto += "Coloque a idade!\n";
    ok = false;
  }

  if(!ok){
    alert(texto);
  }
}