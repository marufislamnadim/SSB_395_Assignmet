
const printAss1 = document.querySelector("#ass-1");
const printAss2 = document.querySelector("#print-ass-2");
const printAss3 = document.querySelector("#print-ass-3");
const printAss3R = document.querySelector("#ass-3");
const printAss4 = document.querySelector("#print-ass-4");
const printAss5 = document.querySelector("#print-ass-5");
const printAss6 = document.querySelector("#print-ass-6");
const printAss7 = document.querySelector("#print-ass-7");
const printAss8C = document.querySelector("#print-ass-8-c");
const printAss8F = document.querySelector("#print-ass-8-f");
const printAss9 = document.querySelector("#print-ass-9");
const printAss10 = document.querySelector("#print-ass-10");

// Assignment 1
printAss1.addEventListener("mouseover",()=>{
		var a = [];
		for(var i= 1; i<=10; i++)
		{
			a.push(i)
		}
		document.getElementById("sol-1").innerHTML = a;
	} 
)
printAss1.addEventListener("mouseout",()=>{

	document.getElementById("sol-1").innerHTML = "";
} 
)
// Assignment 2
printAss2.addEventListener("click",()=>{
	var sum = 0;
	var b = [];
		for(var i= 0; i<100; i++)
		{
			if(i%2 == 1){
				b.push(i);
				document.getElementById("sol-2").innerHTML = b;
			}
			
		}
	} 
)

// Assignment 3
printAss3.addEventListener("click",()=>{
	
	var mult = 7;
	var b = [];
		for(var i= 1; i<=10; i++)
		{
			var sum = i*mult;
			const para = document.createElement("p");
			para.innerHTML = i + " X 7 = " +  sum;
			document.getElementById("inner").appendChild(para);
		}
	} 
)
// printAss3R.addEventListener("mouseout",()=>{
// 	const element =document.getElementById("inner");
// 	element.remove();
// }
// )


// Assignment 4
printAss4.addEventListener("click",()=>{
	
	var mult = 7;
	var b = [];
		for(var i= 1; i<=10; i++)
		{
			
			const para2 = document.createElement("p");
			para2.innerHTML = "Multiplication Table of "+i;
			document.getElementById("ass-4").appendChild(para2);

			for(var j=1; j<=10; j++){
			
			var sum = i*j;
			const para = document.createElement("p");
			para.innerHTML = i + " X "+j+" = " +  sum;
			document.getElementById("ass-4").appendChild(para);
			}

		}
	} 
)

// Assignment 5
printAss5.addEventListener("click",()=>{
	var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var sum = 0;
		for(var i= 0; i<a.length; i++)
		{
			sum = sum + a[i];
			document.getElementById("sol-5").innerHTML = sum;
		}
	} 
)

// Assignment 6
printAss6.addEventListener("click",()=>{
	
	var fact = 1;
		for(var i= 10; i>1; i--)
		{	
			var sum = i*(i-1);
			fact = fact * i;
		}
		const para = document.createElement("p");
		para.innerHTML =" The Factorial Of 10 is " +  fact;
		document.getElementById("ass-6").appendChild(para);
	} 
)

// Assignment 7
printAss7.addEventListener("click",()=>{
	var odd = [];
	var sum = 1;
		for(var i= 11; i<30; i++)
		{	
			if(i%2==1){
				odd.push(i);
				sum = sum + i;
			}
		}
		console.log(sum);
		document.getElementById("sol-7").innerHTML = "The Odd Numbers are - "+odd;

		const para2 = document.createElement("p");
		para2.innerHTML =" The Sum Of Odd Numbers is " +  sum;
		document.getElementById("ass-7").appendChild(para2);
	} 
)

// Assignment 8
printAss8F.addEventListener("click",()=>{
	var userInput = document.getElementById("user_input").value;
	var F = userInput * (9/5) + 32;
	document.getElementById("sol-8").innerHTML = "Fahrenheit = "+F;
	} 
)
printAss8C.addEventListener("click",()=>{
	var userInput = document.getElementById("user_input").value;
	var C = (userInput - 32) * 5/9;
	document.getElementById("sol-8").innerHTML = "Celsius = "+C;
	} 
)

// Assignment 9
printAss9.addEventListener("click",()=>{
	var a = [12, 21, -3, 4, 50, 56, 197, 82, 29, -10];
	var sum = 0;

	const para2 = document.createElement("p");
	para2.innerHTML =" The Array is " +  a;
	document.getElementById("ass-9").appendChild(para2);

	for(var i= 0; i<a.length; i++)
		{
			sum = sum + a[i];
			// document.getElementById("sol-9").innerHTML = "Sum of the numbers among the array is ="+ sum;
		}
		const para = document.createElement("p");
		para.innerHTML ="Sum of the numbers among the array is ="+ sum;
		document.getElementById("ass-9").appendChild(para);
	} 
)

// Assignment 10
printAss10.addEventListener("click",()=>{
	var a = [20, 9, 17, 41, -50, -6, 70, 82, 121, 9];
	var sum = 0;

	const para2 = document.createElement("p");
	para2.innerHTML =" The Array is " +  a;
	document.getElementById("ass-10").appendChild(para2);

	for(var i= 0; i<a.length; i++)
		{
			sum = sum + a[i];
			// document.getElementById("sol-9").innerHTML = "Sum of the numbers among the array is ="+ sum;
		}
		var avg = sum / a.length;
		const para = document.createElement("p");
		para.innerHTML ="Average of the numbers is = "+ avg;
		document.getElementById("ass-10").appendChild(para);
	} 
)