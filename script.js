function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
  
    var convertedValue;
  
    if (fromUnit === "cm" && toUnit === "inch") {
      convertedValue = inputValue * 0.393701;
    } else if (fromUnit === "inch" && toUnit === "cm") {
      convertedValue = inputValue * 2.54;
    } else if (fromUnit === "cm" && toUnit === "foot") {
      convertedValue = inputValue * 0.0328084;
    } else if (fromUnit === "foot" && toUnit === "cm") {
      convertedValue = inputValue * 30.48;
    } else if (fromUnit === toUnit) {
      convertedValue = inputValue;
    }
  
    document.getElementById("result").innerHTML = inputValue + " " + fromUnit + " is equal to " + convertedValue + " " + toUnit;
  }
  