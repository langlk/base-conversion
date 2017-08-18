function binaryConvert(decimalNum) {
  if (decimalNum > 1) {
    var binaryString = "";
    while (decimalNum > 1) {
      binaryString = decimalNum % 2 + binaryString;
      decimalNum = parseInt(decimalNum / 2);
    }
    binaryString = 1 + binaryString;
    return binaryString;
  } else if (decimalNum === 1) {
    return "1";
  } else if (decimalNum === 0) {
    return "0";
  } else {
    return "";
  }
}

function decimalConvert(binaryString) {
  if (binaryString.match(/[^01]/)) {
    return "Error";
  } else {
    if (binaryString.length > 1) {
      var priorValue = 0;
      for (var i = 0; i < binaryString.length; i++) {
        var nextBit = parseInt(binaryString.charAt(i));
        priorValue = priorValue * 2 + nextBit;
      }
      return priorValue;
    } else if(binaryString === "1") {
      return 1;
    } else if (binaryString === "0") {
      return 0;
    } else {
      return "";
    }
  }
}

function anyBaseToDecimal(number, base) {
  var n = number.length;
  var s = 0;
  for (var i = 0; i < number.length; i++) {
    n -= 1;
    s += parseInt(number.charAt(i)) * Math.pow(base, n);
  }
  return s;
}

$(document).ready(function() {
  $("button#binary-convert").click(function() {
    var decimalNum = parseInt($("input#number").val());
    var result = binaryConvert(decimalNum);
    if (result === "") {
      $(".output").text("Please enter a number.");
    } else {
      $(".output").text(result);
    }
  });

  $("button#decimal-convert").click(function() {
    var binaryString = $("input#number").val();
    var result = decimalConvert(binaryString);
    console.log(anyBaseToDecimal(binaryString,2));
    if (result === "Error" || result === "") {
      $(".output").text("Please enter a binary number.");
    } else {
      $(".output").text(result);
    }
  });
});
