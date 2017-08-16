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
    return NaN;
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var decimalNum = parseInt($("input#number").val());
    $(".output").text(binaryConvert(decimalNum));
  });
});
