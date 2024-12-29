//Make tree by eddysantiagoAB

//select elements from DOM
const btn = document.getElementById("make_tree");
const tree = document.getElementById("tree");

btn.addEventListener("click", makeTree);

//Make the tree with custom height
function makeTree() {
  // Deshabilitar el botón al iniciar
  buttonDisabled(btn,true)

  //height tree
  let height = document.getElementById("height").value;
  height = parseInt(height);
  height = height > 0 ? height : Math.floor(Math.random() * (24 - 5 + 1)) + 5;

  //height of trunk
  let trunk = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  tree.innerHTML = ""; // reset previous tree

  //Generate tree
  for (let i = 0; i <= height + trunk; i++) {
    let pElement = document.createElement("p");

    if (i <= height) { //leafs
      pElement.innerText = "*".repeat(i + 1); // +1 to avoid empty line at start
      pElement.style.color = "green";
    } else { //trunk
      pElement.innerText = "*".repeat(1);
      pElement.style.color = "brown";
    }

    //animate the tree by lines
    setTimeout(() => {
      tree.appendChild(pElement); //Add parts of tree in DOM
      
      // Habilitar el botón después de que el árbol esté completamente generado
      if (i === height + trunk) {
        buttonDisabled(btn,false)
      }
    }, i * 48);
  }

  document.getElementById("heightGenerate").innerText = "Altura = " + height;
}

function buttonDisabled(element,value){
   if(value==true){
      element.disabled = true;
      element.style.backgroundColor="gray";
      element.style.cursor="not-allowed";
   }else{
      element.disabled = false;
      element.style.backgroundColor="darkgreen";
      element.style.cursor="pointer";
   }
}





