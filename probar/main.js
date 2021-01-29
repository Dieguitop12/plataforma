function guardar(){
   
    var _titulo = document.getElementById("titulo").value;
    var _descripcion = document.getElementById("descripcion").value;
    var _genero = document.getElementById("genero").value;
    

    var fila="<tr><td>"+_titulo+"</td><td>"+_descripcion+"</td><td>"+_genero+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}