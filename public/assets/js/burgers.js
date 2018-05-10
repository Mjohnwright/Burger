
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        res.redirect('/');

        // location.reload();
      }
    );
  });


  //ON CLICK: AJAX call the 
  $("#change-devoured").on("click", function(event) {
    event.preventDefault();

    console.log('FORM BUTTON CLICKED FOR PUT!')
    var id = $(this).attr("data-burger-id"); //change-devoured
    var newEat = $(this).attr("data-burger-devoured"); 

    var newDevouredState = {
      devoured: newEat
    };
    console.log(id);
    // Send the PUT request.
    $.ajax({
      url: "/burger/update/" + id,
      type: "PUT",
      data: newDevouredState,
      dataType: 'json'
    }).then(
      function() {
        console.log("changed devoured to", newEat);
        // Reload the page to get the updated list
        res.redirect('/');

        // location.reload();
      }
    );
  });



  // $("#change-devoured").on("click", function(event) {
  //   var id = $(this).data("data-burger-id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});