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
    var value = 0;
    if (number.charCodeAt(i) >= 97 && number.charCodeAt(i) <= 122) {
      value = number.charCodeAt(i) - 87;
    } else {
      value = parseInt(number.charAt(i));
    }
    n -= 1;
    s += value * Math.pow(base, n);
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
    if (result === "Error" || result === "") {
      $(".output").text("Please enter a binary number.");
    } else {
      $(".output").text(result);
    }
  });
});
