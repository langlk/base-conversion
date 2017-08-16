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
  if (binaryString === "1") {
    return 1;
  } else if (binaryString === "0") {
    return 0;
  } else {
    return "";
  }
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
    console.log(decimalConvert(binaryString));
  });
});
