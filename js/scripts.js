function binaryConvert(decimalNum) {
  if (decimalNum === 0) {
    return 0;
  } else {
    return NaN;
  }
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var decimalNum = parseInt($("input#number").val());
    console.log(binaryConvert(decimalNum));
  });
});
