function sectionOne() {
    num1 = document.getElementById("sectionOneFirstNumber").value;
    num2 = document.getElementById("sectionOneSecondNumber").value;
  
    result1 = num1 * num2;
    result1 = Math.round(result1 / 12);
  
    result2 = num1 * num2;
    result2 = Math.round(result2);

    // result2 = num1 * num2 * 12;
    // result2 = Math.round(result2 * 100) / 100;

    // Lease Price:
    // (Price per Square Foot x Square Footage)/12 months = Monthly Lease Price
    // ($12) x (100 sqFt) = $1,200 then $1,200/12 months = $100 Monthly Lease Price
  
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
  