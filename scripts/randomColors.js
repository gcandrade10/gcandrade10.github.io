"use strict";
var colors =["#00b300","#d6d6c2","red","#ff6600","#660066","white"];
			var ul = document.getElementById("lista");
			var itemsP = ul.getElementsByTagName("li");

			function pintar(items)
			{
			var numbers = 	new Array(items.length);

			for (var i = 0;i<items.length; i++) 
			{
				var posible=getRandomInt(0,items.length);
				while(i!==0 && posible===numbers[i-1])
				{
					posible=getRandomInt(0,items.length);
				}
				numbers[i]=posible;
			}
			
			for (var i = 0; i <items.length; ++i) 
			{
  				items[i].style.color=colors[numbers[i]];
			}

			
			}

			pintar(itemsP);

			var ul1 = document.getElementById("listaCaracteristicas");
			var intereses = ul1.getElementsByTagName("li");

			pintar(intereses);


			function getRandomInt(min, max) 
			{
  			return Math.floor(Math.random()* (max - min)) + min;
			}