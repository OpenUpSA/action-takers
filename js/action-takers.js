var url = window.location.href;

$(".page-share .facebook").click(function(e) {
  e.preventDefault();
  window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href, "share", "width=600, height=400, scrollbars=no");
  ga('send', 'social', 'facebook', 'share', url);
});

$(".page-share .twitter").click(function(e) {
  e.preventDefault();
  window.open("https://twitter.com/intent/tweet?&url="+window.location.href, "share", "width=600, height=400, scrollbars=no");
  ga('send', 'social', 'twitter', 'share', url);
});

$(".page-share .email").click(function(e) {
  e.preventDefault();
  var emailTitle = encodeURIComponent(document.title).replace(/&/g, '%26');
  window.location = 'mailto:?subject=' + emailTitle + '&body=I saw this on Action Takers and thought you might be interested: ' + url;
  ga('send', 'social', 'email', 'share', url);
});

$(".guide-meta .download").click(function() {
  ga('send', 'event', 'pdf', 'download', url);
});

$(".panel-heading.title-box > div").click(function() {
  ga('send', 'event', 'step toggle', $(".circle",this).text() + ". " + $(".title",this).text(), url );
});

$(".did-you-know .content .show-extra").click(function(e) {
  e.preventDefault();
  $(".extra").slideToggle(200);
  $("i", this).toggleClass("fa-caret-up");
});

// scroll to an object

