//WORKING
function sectionOne() {
    num1 = document.getElementById("sectionOneFirstNumber").value;
    num2 = document.getElementById("sectionOneSecondNumber").value;
    document.getElementById("sectionOneResult1").innerHTML = "$" + num1 * num2;
    document.getElementById("sectionOneResult2").innerHTML =
      "$" + (num1 * num2) / 12;
  }
  
  function sectionTwo() {
    num1 = document.getElementById("sectionTwoFirstNumber").value;
    num2 = document.getElementById("sectionTwoSecondNumber").value;
    document.getElementById("sectionTwoResult").innerHTML =
      "$" + (num1 * 12) / num2;
  }
  
  function sectionThree() {
    num1 = document.getElementById("sectionThreeFirstNumber").value;
    num2 = document.getElementById("sectionThreeSecondNumber").value;
    document.getElementById("sectionThreeResult").innerHTML = "$" + num1 / num2;
  }
  
  // TESTING
  // function multiplyBy(num) {
  //   num1 = document.getElementById("firstNumber").value.num_parts;
  //   num2 = document.getElementById("secondNumber").value.num_parts;
  
  //   num1 = num.toString().split(".");
  //   num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //   return num_parts.join(".");
  
  //   document.getElementById("result1").innerHTML = "$" + num1 * num2;
  //   document.getElementById("result2").innerHTML =
  //     "$" + (num1 * num2) / 12 / num2;
  // }
  