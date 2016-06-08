// business logic
var leapYear = function(year) {
  if(/^\d+$/.test(year)){
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  else
    return 1;
};

// user interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = $("input#year").val();
    var result = leapYear(year);
    if(result ===1){$(".output").text("wrong input");console.log("asdasd")}
    else {
      if (!result) {
        $(".output").text("this is not a leap year");
      } else{
        $(".output").text("this is a leap year");
      }
    }

    $("#result").show();
  });
});
