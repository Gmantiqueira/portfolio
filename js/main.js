var $doc = $("html, body");
$(".menu a").click(function() {
  $doc.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 128
    },
    400
  );
  return false;
});
