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

$(".page-share .facebook").on("click", function(e) {
  e.preventDefault();
  window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href,
    "share", "width=600, height=400, scrollbars=no");
  ga('send', 'social', 'facebook', 'share', url);
});

$(".page-share .twitter").on("click", function(e) {
  e.preventDefault();
  window.open("https://twitter.com/intent/tweet?&url="+window.location.href,
    "share", "width=600, height=400, scrollbars=no");
  ga('send', 'social', 'twitter', 'share', url);
});

$(".page-share .email").on("click", function(e) {
  e.preventDefault();
  var url = window.location.href;
  var emailTitle = encodeURIComponent(document.title).replace(/&/g, '%26');
  window.location = 'mailto:?subject=' + emailTitle + '&body=I saw this on Action Takers and thought you might be interested: ' + url;
  ga('send', 'social', 'email', 'share', url);
});
