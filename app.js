function sectionOne() {
    num1 = document.getElementById("sectionOneFirstNumber").value;
    num2 = document.getElementById("sectionOneSecondNumber").value;
  
    result1 = num1 * num2;
    result1 = Math.round(result1 * 100) / 100;
  
    result2 = num1 * num2 * 12;
    result2 = Math.round(result2 * 100) / 100;
  
    document.getElementById("sectionOneResult1").innerHTML = "$" + result1;
    document.getElementById("sectionOneResult2").innerHTML = "$" + result2;
  }
  
  function sectionTwo() {
    num1 = document.getElementById("sectionTwoFirstNumber").value;
    num2 = document.getElementById("sectionTwoSecondNumber").value;
  
    result = (num1 * 12) / num2;
    result = Math.round(result * 100) / 100;
  
    document.getElementById("sectionTwoResult").innerHTML = "$" + result;
  }
  
  function sectionThree() {
    num1 = document.getElementById("sectionThreeFirstNumber").value;
    num2 = document.getElementById("sectionThreeSecondNumber").value;
  
    result = num1 / num2;
    result = Math.round(result * 100) / 100;
  
    document.getElementById("sectionThreeResult").innerHTML = "$" + result;
  }
  