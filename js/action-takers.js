$(".step-detail-page .tabs .btn-taking-action").on("click", function(e) {
  e.preventDefault();
  $(this).addClass("active");
  $(".step-detail-page .tabs .btn-support-resources").removeClass("active");
  $(".content-taking-action").removeClass("hidden");
  $(".content-support-resources").addClass("hidden");
});

$(".step-detail-page .tabs .btn-support-resources").on("click", function(e) {
  e.preventDefault();
  $(this).addClass("active");
  $(".step-detail-page .tabs .btn-taking-action").removeClass("active");
  $(".content-support-resources").removeClass("hidden");
  $(".content-taking-action").addClass("hidden");
});
