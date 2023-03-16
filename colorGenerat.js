// let color = '0123456789abcdef';
		// let hax = '#';
		// let length = Array.from(color).length;

		document.querySelector("button").onclick = () =>{
			// without Loop

			// let a = color[Math.floor(Math.random()*(length))];
			// let b = color[Math.floor(Math.random()*(length))];
			// let c = color[Math.floor(Math.random()*(length))];
			// let d = hax + a + b + c;
			// document.querySelector("input").value = d;
			// document.body.style.background = d;
			// console.log(d);
			
			// With Loop
			
			let color = '0123456789abcdef';
			let hax = '#';
			let length = Array.from(color).length;

			for(let i=0; i<6; i++){
				hax = hax + color[Math.floor(Math.random()*length)];
			}


			document.querySelector("input").value = hax;
			document.body.style.background = hax;
			console.log(hax);	
		}