function mostrar_datos(){
	var titulo = document.getElementById("titulo");
	var descripcion = document.getElementById("descripcion");
	var genero = document.getElementById("genero");

	var datos = document.getElementById("datos");	

	var p_titulo = document.createElement("p");
	var text_titulo = document.createTextNode("titulo: " + titulo.value)
	p_titulo.appendChild(text_titulo);

	var p_descripcion = document.createElement("p");
	var text_descripcion = document.createTextNode("descripcion: " + editorial.value);
	p_descripcion.appendChild(text_descripcion);
	
	var p_genero = document.createElement("p");
	var text_genero = document.createTextNode("genero: " + genero.value);
	p_genero.appendChild(text_genero);
	
	datos.appendChild(p_titulo);
	datos.appendChild(p_descripcion);
	datos.appendChild(p_genero);

	datos.style.visibility = 'visible';
	datos.style.display = 'block';


}
function ocultar_datos() {
 datos.style.display= 'none';
document.getElementById('datos').innerHTML = '';

}