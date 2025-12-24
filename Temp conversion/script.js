const input = document.getElementById("input");
const Celsius = document.getElementById("Celsius");
const Fahrenheit = document.getElementById("Fahrenheit");
const button = document.getElementById("button");
const output = document.getElementById("output");

let temp;


document.getElementById("button").onclick = function(){
    if(Celsius.checked){
       temp = input.value;
       temp = Number(temp);
       temp = temp * 9 / 5 + 32;
       output.textContent = temp.toFixed(1) + "F";
    }
    else if(Fahrenheit.checked){
        temp = input.value;
        temp = Number(temp);
        temp = (temp - 32) * (5/9);

        output.textContent = temp.toFixed(1) + "C";
    }
    else{
        output.textContent = "Select a unit";
    }
}
