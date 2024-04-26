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
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var fixedDiv = document.getElementById("second");
  var firstDiv = document.getElementById("first");
  var hidingMenu = document.getElementById("hide");

  if (scrollPosition > firstDiv.offsetHeight) {
    fixedDiv.classList.add("fixed");
    hidingMenu.classList.add("fixedMenu");
  } else {
    fixedDiv.classList.remove("fixed");
    hidingMenu.classList.remove("fixedMenu");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var hiding_menu = document.getElementById("bar");
  var menu = document.getElementById("hide");
  var isOpen = false;

  hiding_menu.addEventListener("click", () => {
    if (!isOpen) {
      isOpen = true;
      menu.style.display = "flex";
    } else {
      isOpen = false;
      menu.style.display = "none";
    }
  });
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var fixedDiv = document.getElementById("second");
  var firstDiv = document.getElementById("first");
  var thirdDiv = document.getElementById("third");
  var content = document.getElementsByClassName("title")[0];

  if (scrollPosition > firstDiv.offsetHeight) {
    if (!thirdDiv) {
      fixedDiv.classList.add("fixed");
      content.style.marginTop = 20 + fixedDiv.offsetHeight + "px";
    } else {
      fixedDiv.classList.remove("fixed");
      if (scrollPosition > fixedDiv.offsetHeight) {
        fixedDiv.classList.remove("sticky");
        fixedDiv.classList.add("fixed");
        content.style.marginTop = 20 + fixedDiv.offsetHeight + "px";
      } else {
        fixedDiv.classList.add("sticky");
        fixedDiv.classList.remove("fixed");
        content.style.marginTop = "20px";
      }
    }
  } else {
    fixedDiv.classList.remove("fixed");
    fixedDiv.classList.remove("sticky");
    content.style.marginTop = "20px";
  }
});

function openNewPage() {
  window.location.href = "single_product.html";
}
function home() {
  window.location.href = "home.html";
}
function products() {
  window.location.href = "products.html";
}
function favourites() {
  window.location.href = "favourites.html";
}
function basket() {
  window.location.href = "basket.html";
}
