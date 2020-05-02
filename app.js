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

  //new shit