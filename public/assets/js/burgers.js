$(function () {
  // "Eats" the burger
  $(".devour-button").on("click", function (event) {
    console.log("Eaten?");
    var id = $(this).data("id");
    console.log(id);
    var newDevour = $(this).data("devoured");
    console.log(newDevour);
    var newDevourState = {
      devoured: newDevour
    };
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Adds new burger
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#name-input").val().trim()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Deletes eaten burger
  $(".delete-button").on("click", function (event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});