document.addEventListener("DOMContentLoaded", function () {
  var otherLinks = document.getElementsByClassName("othera");
  for (var i = 0; i < otherLinks.length; i++) {
    otherLinks[i].addEventListener("click", function (event) {
      event.preventDefault();

      var loading = document.getElementById("loading");
      loading.style.display = "block";

      setTimeout(function () {
        window.location.href = event.target.href;
      }, 500);
    });
  }

  var thisLinks = document.getElementsByClassName("thisa");
  for (var j = 0; j < thisLinks.length; j++) {
    thisLinks[j].addEventListener("click", function (event) {
      event.preventDefault();

      var loading = document.getElementById("loading");
      loading.style.display = "block";

      setTimeout(function () {
        window.location.href = event.target.href;
      }, 500);
    });
  }
});
