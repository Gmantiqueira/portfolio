var $doc = $("html, body");
$("nav a").click(function() {
  $doc.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    400
  );
  return false;
});
