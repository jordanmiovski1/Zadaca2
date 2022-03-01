
var	c=4;
var	brojac=0;
var brojac1=0;
var lajk = 0;






function loadData() {	

for (let index = c;index < c+4; index++)
 {

	 let list = document.getElementById("flex-cat-gen");
        let div = document.createElement("div");
        let img = document.createElement("img");		
        img.src = data.images[index].image;
        img.width = 300;
        img.height = 300;
		

		
	
        let img1 = document.createElement("img");
		img1.style.position = 'absolute';
		let img2 = document.createElement("img");
		
		
		
		


		

		
	
		
		img1.src = "C:/Users/User/Desktop/FrontEnd/instagram-logo.svg";
		img2.src = "C:/Users/User/Desktop/FrontEnd/heart.svg";
		
		
		list.appendChild(div);
        div.appendChild(img);
		div.appendChild(img1);
		div.appendChild(img2);
		
		img2.addEventListener("click", function () {
			
			img2.style.background = "red";
			
			
			
		});


		brojac++;
		if (brojac % 4 ==0)
		{
			c=c+4;
			brojac1++
			
			if (brojac1 == 4)
			{				
				function removeElement(elementId)
				{
					var element = document.getElementById(elementId);//cat-generator
					element.parentNode.removeChild(element);
				}

					removeElement("cat-generator");
			}
			break;
		}
		
		
		
		
		
    };
}

