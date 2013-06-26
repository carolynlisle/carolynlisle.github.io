$(function() {
  $("body").removeClass("preload");

  var closeAllCards = function() {
    $(".card").removeClass("active");
    $(".card-expansion").removeClass("active");
  };

  var openCard = function(card) {
    var expansion_id = $(card).attr('data-expand-card');

    $(card).addClass("active");
    $("#"+expansion_id).addClass("active");
  };

  $("*[data-expand-card]").click(function(el) {

    // Close all other cards
    closeAllCards();

    // Open this card
    openCard(this);
  });
});
