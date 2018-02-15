"use strict";
// Get the modal
var modal = document.getElementById('myModal');
var imgs = document.getElementsByClassName("modals");
for (var i = imgs.length - 1; i >= 0; i--) 
{
	asignar(imgs[i]);
}
function asignar(img)
{
	img.onclick = function()
	{
		var b=document.getElementById("boton");
		console.log(img);
		var route = img.src.split("images")[1].split(".")[0];
		route="./jsons"+route+".json";
		//route=route.replace("/","\\");
		console.log(route);
		var json=$.getJSON(route,function(data)
		{
			console.log(data);
			$("#titulo").text(data.titulo);
			$("#descripcion").text(data.descripción);
			$("#imagen").attr("src",data.imagen);
			$("#position").text("Position: "+data.position);
			$("#date").text("Date: "+data.date);
			$("#link").attr("href",data.link);
		});
		    b.click();
	}
}