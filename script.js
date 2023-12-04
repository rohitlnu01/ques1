// Initialize draggable element
$("#draggable-element").draggable();

// Initialize droppable area
$("#droppable-area").droppable({
  drop: function(event, ui) {
    $(this).addClass("ui-state-highlight").html("Dropped!");
  }
});

// Initialize resizable element
$(function() {
  $(".resizable-element").resizable();
});



// Initialize selectable list
$("#selectable-list").selectable();

// Initialize accordion
$(".accordion-container").accordion();

$("#resizable-element").resizable();

// Initialize autocomplete
var availableTags = ["Apple", "Banana", "Cherry", "Date", "Grape"];
$("#autocomplete").autocomplete({
  source: availableTags
});

// Initialize datepicker
$("#datepicker").datepicker();

// Initialize slider
$("#slider").slider();

// Initialize show/hide effect
$("#show-hide-element").click(function() {
  $(this).toggle("scale");
});

// Initialize explode effect
$("#explode-element").click(function() {
  $(this).effect("explode");
});

// Initialize fade-in/fade-out effect
$("#fade-element").click(function() {
  $(this).fadeToggle("slow");
});

// Initialize color animation effect
$("#color-animation-element").click(function() {
  $(this).animate({
    backgroundColor: "#e74c3c",
    color: "#fff"
  }, "slow");
});
