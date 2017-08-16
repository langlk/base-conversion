

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var decimalNum = parseInt($("input#number").val());
    binaryConvert(decimalNum);
  });
});
