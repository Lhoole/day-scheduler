var saveBtn = $(".saveBtn")
var textBox = $(".description")
var Tblock = $(".time-block")
var storage = ""
var time = "0"
var date;
var chosen;
var usertext;


$(function () {
  $( textBox ).each( function(){
    var contentId = $(this).parent().attr('id')
    var newcontent = localStorage.getItem(contentId)
    if (newcontent !== null) {
      $(this).val(newcontent)
    }
  });
  var today = dayjs();
  setInterval(function() { 
    today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
 
  $( Tblock ).each( function(){
if ($(this).attr("data-time") < today.hour()){
    $(this).addClass("past");
    $(this).removeClass("present future");
 } else if ($(this).attr("data-time") == today.hour()){
   $(this).addClass("present")
   $(this).removeClass("future past")
 } else if ($(this).attr("data-time") > today.hour()){
   $(this).addClass("future")
   $(this).removeClass("present past")
 }
});
  }, 1000);



});
function savefn(){
  time = ($(chosen).prev());
  var timeslot = ($(time).parent().attr('id'))
  localStorage.setItem(timeslot, $(time).val());
}
$(saveBtn).on('click', function (event) {
  chosen = event.target;
  $(savefn)
});

$(textBox).on('input', function handleChange(event) {
  usertext = event.target.value
  event.target.textContent = usertext.trim()
});