function calculateInsurance(age, horse_power, name, country) {
	
	age = document.getElementById("age").value;
	horse_power = document.getElementById("horsepower").value;
	name = String(document.getElementById("name").value);
	country = String(document.getElementById("country").value);
	
	if (age =="" || horse_power == "" || name =="") {
		alert("Please fill all of the input fields and select your country!");
	
	} else {

		var insurance = Number(horse_power * 100 / age + 150);
		insurance = Math.ceil(insurance);
		document.getElementById("cost").innerHTML = "Price: " + insurance + "&euro;";
		document.getElementById("cost").setAttribute("class", "calculatedPrice");
	}
}


var calculate = document.getElementById("calculate");

calculate.addEventListener("click", calculateInsurance);