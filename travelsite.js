window.onload=transition;

var a = 1;
function transition(){

	var caption = "";

		document.getElementById("images").innerHTML="<img src='photos/pic"+a+".jpg' height='600px' width='600px' class ='images1'>";
		
		if(a == "1"){

			caption = "The best burger in town, now in just $5.99";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "2"){

			caption = "Get your Tatto's now, when you travel with us at cheap rates";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "3"){

			caption = "Pick and Drop available from and to the destinations";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "4"){

			caption = "Heated pools available at our 5-star Hotels";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "5"){

			caption = "The CEO of our company, Jhonny Depp";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "6"){

			caption = "We provide, professional photographers too and free pictures with our packages";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "7"){

			caption = "Travel to Rome with your family and enjoy the unique rooms we offer";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "8"){

			caption = "Brand new buildings with Air Conditioning";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "9"){

			caption = "Travel the Mountains without any worry with our top class guides";
			document.getElementById("captions").innerHTML = caption;
		}

		if(a == "10"){

			caption = "Now offering 9-day trip to Switzerland";
			document.getElementById("captions").innerHTML = caption;
		}
		a++;

		if(a > 10){
			a = 1;
		}
		setTimeout('transition()',2500);
	}

